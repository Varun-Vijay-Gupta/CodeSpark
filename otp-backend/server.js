require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const otpStorage = {}; // Store OTPs temporarily

// Generate a random 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Configure Nodemailer to use Gmail
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // Your Gmail address from .env
        pass: process.env.EMAIL_PASS  // Your Gmail app password from .env
    }
});

// Endpoint to send OTP
app.post("/send-otp", async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ message: "Email is required!" });

        const otp = generateOTP();
        otpStorage[email] = { otp, expiresAt: Date.now() + 300000 }; // OTP valid for 5 minutes

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Your OTP Code",
            text: `Your OTP code is ${otp}. It is valid for 5 minutes.`,
        };

        await transporter.sendMail(mailOptions);
        res.json({ message: "OTP sent successfully!" });

    } catch (error) {
        console.error("Error sending OTP:", error);
        res.status(500).json({ message: "Failed to send OTP!", error: error.message });
    }
});

// Endpoint to verify OTP
app.post("/verify-otp", (req, res) => {
    const { email, otp } = req.body;
    if (!email || !otp) {
        return res.status(400).json({ message: "Email and OTP are required" });
    }

    if (otpStorage[email] && otpStorage[email].otp === otp) {
        if (Date.now() > otpStorage[email].expiresAt) {
            delete otpStorage[email];
            return res.status(400).json({ message: "OTP expired! Request a new one." });
        }
        delete otpStorage[email]; // Remove OTP after successful verification
        res.json({ message: "OTP verified successfully!" });
    } else {
        res.status(400).json({ message: "Invalid OTP" });
    }
});

// ✅ Contact Form Submission Endpoint
app.post("/send-email", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const mailOptions = {
            from: email, // User's email
            to: process.env.EMAIL_USER, // Your email where you receive the messages
            subject: "New Contact Form Submission",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
        };

        await transporter.sendMail(mailOptions);
        res.json({ message: "Message sent successfully!" });

    } catch (error) {
        console.error("Error sending message:", error);
        res.status(500).json({ message: "Failed to send message!", error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});
