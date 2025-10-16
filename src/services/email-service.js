const { ServerConfig, MailSender } = require("../config");
const { TicketRepository } = require("../repositories");

const ticketRepository = new TicketRepository();

async function sendEmail({ from, to, subject, html, text }) {
    try {
        const info = await MailSender.sendMail({
            from: ServerConfig.EMAIL_USER,
            to,
            subject,
            text,
            html,
        });

        console.log('Email sent:', info.response);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: error.message };
    }
}

const createTicket = async (data) => {
    try {
        const response = await ticketRepository.create(data);
        return response;
    } catch (error) {
        throw error;
    }
}

const getPendingEmail = async () => {
    try {
        const response = await ticketRepository.getPendingTickets();
        return response;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    sendEmail,
    createTicket,
    getPendingEmail
}