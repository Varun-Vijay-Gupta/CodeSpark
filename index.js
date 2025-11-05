document.addEventListener("DOMContentLoaded", function () {
    const loginSection = document.querySelector(".login-section");
    const loginLink = document.querySelector(".login-link");
    const registerLink = document.querySelector(".register-link");
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
    const passwordInput = document.getElementById("signupPassword");
    const togglePassword = document.getElementById("togglePassword");
    const strengthBar = document.getElementById("strength-bar");
    const strengthText = document.getElementById("strength-text");
    const signupError = document.getElementById("signupError");
    const signupEmail = document.getElementById("signupEmail");
    const otpPlaceholder = document.getElementById("otpPlaceholder");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Toggle login/signup view
    registerLink?.addEventListener("click", () => loginSection.classList.add("active"));
    loginLink?.addEventListener("click", () => loginSection.classList.remove("active"));

    // Toggle password visibility
    togglePassword?.addEventListener("click", () => {
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
        togglePassword.classList.toggle("active");
        togglePassword.textContent = passwordInput.type === "password" ? "👁️" : "🙈";
    });

    const loginPasswordInput = document.getElementById("password");
    const toggleLoginPassword = document.getElementById("toggleLoginPassword");
    toggleLoginPassword?.addEventListener("click", () => {
        const type = loginPasswordInput.type === "password" ? "text" : "password";
        loginPasswordInput.type = type;
        toggleLoginPassword.textContent = type === "password" ? "👁️" : "🙈";
    });

    // Password strength bar
    passwordInput?.addEventListener("input", () => {
        const val = passwordInput.value;
        let strength = 0;
        if (val.length >= 8) strength++;
        if (/[A-Z]/.test(val)) strength++;
        if (/\d/.test(val)) strength++;
        if (/[@$!%*?&]/.test(val)) strength++;

        strengthBar.value = strength;
        const texts = ["Too Weak", "Weak", "Medium", "Strong", "Very Strong"];
        const colors = ["red", "orange", "#db9d00", "green", "darkgreen"];
        strengthText.innerText = texts[strength];
        strengthText.style.color = colors[strength];
    });

    // Alert system
    const alertContainer = document.createElement("div");
    alertContainer.id = "alert-container";
    Object.assign(alertContainer.style, {
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "15px 25px",
        borderRadius: "5px",
        color: "#fff",
        fontSize: "16px",
        display: "none",
        transition: "opacity 0.5s ease-in-out, transform 0.5s ease-in-out",
        opacity: "0",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: "1000"
    });
    document.body.appendChild(alertContainer);

    function showAlert(message, redirectUrl = null, type = "success") {
        alertContainer.textContent = message;
        alertContainer.style.backgroundColor = type === "success" ? "#28a745" : "#dc3545";
        alertContainer.style.display = "block";
        alertContainer.style.opacity = "1";
        alertContainer.style.transform = "translateX(-50%) translateY(0)";
        setTimeout(() => {
            alertContainer.style.opacity = "0";
            alertContainer.style.transform = "translateX(-50%) translateY(10px)";
            setTimeout(() => {
                alertContainer.style.display = "none";
                if (redirectUrl) window.location.href = redirectUrl;
            }, 500);
        }, 3000);
    }

    // Automatically show OTP field on email input blur
    let otpFieldAdded = false;
    signupEmail.addEventListener("blur", () => {
        const email = signupEmail.value.trim();
        if (!emailRegex.test(email)) return;

        fetch("http://localhost:5000/send-otp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        })
        .then(res => res.json())
        .then(data => {
            if (data.message === "OTP sent successfully!") {
                showAlert("📨 OTP sent to your email!", null, "success");
                signupError.textContent = "Enter the OTP below to verify your email.";
                signupError.style.color = "lightgreen";

                
            } else {
                showAlert("❌ Failed to send OTP.", null, "error");
            }
        })
        .catch(err => {
            console.error("OTP error:", err);
            showAlert("❌ OTP request failed.", null, "error");
        });
    });

    // Sign-up handler with OTP verification
    signupForm?.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("signupUsername").value.trim();
        const email = signupEmail.value.trim();
        const password = passwordInput.value.trim();
        const otp = document.getElementById("signupOTP")?.value.trim();

        if (!emailRegex.test(email)) {
            signupError.textContent = "❌ Invalid email address.";
            signupError.style.color = "white";
            return;
        }

        if (!passwordRegex.test(password)) {
            signupError.textContent = "❌ Password must be 8+ chars with uppercase, number, and symbol.";
            signupError.style.color = "white";
            return;
        }

        if (!otp) {
            signupError.textContent = "❌ Please enter the OTP sent to your email.";
            signupError.style.color = "white";
            return;
        }

        fetch("http://localhost:5000/verify-otp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, otp })
        })
        .then(res => res.json())
        .then(data => {
            if (data.message === "OTP verified successfully!") {
                localStorage.setItem(email, JSON.stringify({ username, password }));
                signupError.textContent = "";
                showAlert("✅ Sign-up successful!", "index.html", "success");
            } else {
                signupError.textContent = `❌ ${data.message}`;
                signupError.style.color = "white";
            }
        })
        .catch(err => {
            console.error("Verify OTP error:", err);
            signupError.textContent = "❌ OTP verification failed.";
            signupError.style.color = "white";
        });
    });

    // Login handler
    loginForm?.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email")?.value.trim();
        const password = document.getElementById("password")?.value.trim();
        const storedUser = localStorage.getItem(email);

        if (storedUser) {
            const userData = JSON.parse(storedUser);
            if (password === userData.password) {
                showAlert("✅ Login successful!", "dashboard.html", "success");
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("username", userData.username);
            } else {
                showAlert("❌ Incorrect password.", null, "error");
            }
        } else {
            showAlert("❌ User not found. Please sign up.", null, "error");
        }
    });
});
