const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

import { initializeApp } from "firebase/app";

const app = express();
const port = 3001; // Use a different port from React app

// Middleware to parse JSON
app.use(bodyParser.json());

// Configure CORS
app.use(cors());

// Endpoint to handle form submissions
app.post("/submit-form", async (req, res) => {
  const { email, phone, subject } = req.body;

  // Send immediate email to the user
  const emailResult = await sendImmediateEmail(email, subject, phone);

  if (emailResult.status) {
    res
      .status(200)
      .json({ message: "Form submitted successfully and email sent!" });
  } else {
    res.status(500).send("Error submitting form and sending email.");
  }
});

// Function to send immediate email
const sendImmediateEmail = async (email, subject, phone) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
      clientId: process.env.NODEMAILER_CLIENT_ID,
      clientSecret: process.env.NODEMAILER_CLIENT_SECRET,
      refreshToken: process.env.NODEMAILER_REFRESH_TOKEN,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: email,
    subject: "Reminder",
    text: `Here's your reminder to contact the following: ${subject} / ${phone}`,
  };

  try {
    const sendMailInfo = await transporter.sendMail(mailOptions);

    return {
      status: true,
      data: sendMailInfo.response,
    };
  } catch (error) {
    console.error(`Error sending immediate email to ${email}: ${error}`);

    return {
      status: false,
      data: error,
    };
  }
};

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
