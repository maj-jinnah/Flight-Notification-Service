const nodemailer = require("nodemailer");
const  ServerConfig  = require("./server-config");

// Create a test account or replace with real credentials.
const mailSender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: ServerConfig.EMAIL_USER,
        pass: ServerConfig.EMAIL_PASSWORD,
    },
});

module.exports = mailSender;