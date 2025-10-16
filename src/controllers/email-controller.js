const { EmailService } = require("../services");

const create = async (req, res) => {
    try {
        const { subject, content, recipientEmail } = req.body;
        const response = await EmailService.createTicket({ subject, content, recipientEmail });
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    create
}