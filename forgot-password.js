document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("sendOtpForm").addEventListener("submit", async function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      localStorage.setItem("resetEmail", email); // Store email for password reset

      try {
          const response = await fetch("http://localhost:5000/send-otp", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email })
          });
          const data = await response.json();
          showCustomAlert(data.message, response.ok ? "success" : "error");
          if (response.ok) {
              document.getElementById("otpSection").classList.remove("hidden");
          }
      } catch (error) {
          showCustomAlert("Error sending OTP!", "error");
      }
  });

  document.getElementById("verifyOtpForm").addEventListener("submit", async function (e) {
      e.preventDefault();
      const email = localStorage.getItem("resetEmail");
      const otpInput = document.getElementById("otpInput").value;

      try {
          const response = await fetch("http://localhost:5000/verify-otp", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, otp: otpInput })
          });
          const data = await response.json();
          showCustomAlert(data.message, response.ok ? "success" : "error");
          if (response.ok) {
              setTimeout(() => {
                  window.location.href = "reset-password.html";
              }, 2000); // Small delay so user can see the success message
          }
      } catch (error) {
          showCustomAlert("Error verifying OTP!", "error");
      }
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
