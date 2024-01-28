const express = require("express");
const bodyParser = require("body-parser");
const schedule = require("node-schedule");
const nodemailer = require("nodemailer");

const app = express();
const port = 3001; // Use a different port from React app

// Middleware to parse JSON
app.use(bodyParser.json());

// Your form submissions storage
let submissions = [];

// Endpoint to handle form submissions
app.post("/submit-form", (req, res) => {
  const { email, phoneNumber, formData } = req.body;
  submissions.push({ email, phoneNumber, formData });
  res.status(200).send("Form submitted successfully");
});

// Scheduled job to send reminders every 7 days
schedule.scheduleJob("0 0 * * *", () => {
  const today = new Date();
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(today.getDate() - 7);

  const reminders = submissions.filter((submission) => {
    return new Date(submission.timestamp) <= sevenDaysAgo;
  });

  reminders.forEach((reminder) => {
    sendReminderEmail(reminder.email, reminder.formData);
  });
});

// Function to send reminder email
function sendReminderEmail(email, formData) {
  // Implement email sending logic using nodemailer or your preferred library
  // ...

  console.log(`Reminder email sent to ${email}`);
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
