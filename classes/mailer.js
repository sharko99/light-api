const nodemailer = require('nodemailer');
require('dotenv').config();

/**
 * Mailer class to handle sending emails.
 */
class Mailer {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    }

    /**
     * Send an email.
     * @param {string} to - The recipient's email address.
     * @param {string} subject - The subject of the email.
     * @param {string} text - The plaintext content of the email.
     * @param {string} html - The HTML content of the email.
     * @returns {Promise<Object>} - A promise that resolves to the result of the email sending.
     * @example
     * const result = await mailer.sendMail('recipient@example.com', 'Subject', 'Plain text body', '<p>HTML body</p>');
     */
    async sendMail(to, subject, text, html) {
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to,
            subject,
            text,
            html,
        };

        const result = await this.transporter.sendMail(mailOptions);
        return result;
    }
}

module.exports = new Mailer();