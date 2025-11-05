document.addEventListener("DOMContentLoaded", function () {
    // Handle password reset form submission
    document.getElementById("resetPasswordForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const email = localStorage.getItem("resetEmail");
        const newPassword = document.getElementById("newPassword").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        if (!email) {
            showCustomAlert("No reset email found. Please request a new reset link.", "error");
            return;
        }

        if (newPassword.length < 8) {
            showCustomAlert("Password must be at least 8 characters long!", "error");
            return;
        }

        if (newPassword === confirmPassword) {
            let storedUser = localStorage.getItem(email);
            if (storedUser) {
                let userData = JSON.parse(storedUser);
                userData.password = newPassword;
                localStorage.setItem(email, JSON.stringify(userData));

                sessionStorage.setItem("resetSuccess", "Password reset successful! Login with your new password.");
                showCustomAlert("Password reset successful! Redirecting to login page...", "success");

                setTimeout(() => {
                    window.location.href = "index.html";
                }, 2000);
            } else {
                showCustomAlert("User email not found! Please sign up.", "error");
            }
        } else {
            showCustomAlert("Passwords do not match!", "error");
        }
    });

    // Show success message on login page if redirected after reset
    const resetSuccess = sessionStorage.getItem("resetSuccess");
    if (resetSuccess) {
        showCustomAlert(resetSuccess, "success");
        sessionStorage.removeItem("resetSuccess");
    }

    // Add Eye Toggle Functionality
    const toggleIcons = document.querySelectorAll(".toggle-password");
    toggleIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            const targetInput = document.getElementById(this.dataset.target);
            if (targetInput.type === "password") {
                targetInput.type = "text";
                this.innerHTML = "🙈"; // Eye close
            } else {
                targetInput.type = "password";
                this.innerHTML = "👁️"; // Eye open
            }
        });
    });
});

// Custom Alert Function
function showCustomAlert(message, type) {
    const alertBox = document.createElement("div");
    alertBox.textContent = message;
    alertBox.style.position = "fixed";
    alertBox.style.bottom = "30px";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translateX(-50%)";
    alertBox.style.padding = "15px 30px";
    alertBox.style.backgroundColor = type === "success" ? "#28a745" : "#dc3545";
    alertBox.style.color = "white";
    alertBox.style.borderRadius = "8px";
    alertBox.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    alertBox.style.fontFamily = "Poppins, sans-serif";
    alertBox.style.fontWeight = "500";
    alertBox.style.fontSize = "16px";
    alertBox.style.zIndex = "9999";
    alertBox.style.display = "flex";
    alertBox.style.alignItems = "center";
    alertBox.style.gap = "10px";
    alertBox.style.opacity = "1";
    alertBox.style.transition = "opacity 0.5s ease";

    const icon = document.createElement("span");
    icon.innerHTML = type === "success" ? "&#10003;" : "&#10060;";
    icon.style.fontSize = "20px";
    alertBox.prepend(icon);

    document.body.appendChild(alertBox);

    setTimeout(() => {
        alertBox.style.opacity = "0";
        setTimeout(() => {
            alertBox.remove();
        }, 500);
    }, 3000);
}
