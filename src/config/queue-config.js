const amqplib = require("amqplib");
const { EmailService } = require('../services')

async function connectQueue() {
    try {
        const connection = await amqplib.connect("amqp://localhost");
        const channel = await connection.createChannel();

        await channel.assertQueue("notifications");

        channel.consume("notifications", async (data) => {
            // console.log(`${Buffer.from(data.content)}`);
            const object = JSON.parse(`${Buffer.from(data.content)}`);
            await EmailService.sendEmail(object.to, object.subject, object.text);
            channel.ack(data);
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {connectQueue};
