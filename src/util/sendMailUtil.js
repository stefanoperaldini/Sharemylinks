import nodemailer from 'nodemailer'; //paquete de npm que permite enviar email
import dotenv from 'dotenv';
import { sendMailError } from '../services/errorService.js';

dotenv.config(); 

const {SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS} = process.env;

const transport = nodemailer.createTransport({ //creamos el tranporte
    host: SMTP_HOST,
    port: SMTP_PORT,
    auth:{
        user: SMTP_USER,
        pass: SMTP_PASS
    }
});

const sendMailUtil = async (email, subject, body) => { //email,tema, cuerpo
    try {
        const mailOptions = {
            from: SMTP_USER,
            to: email,
            subject,
            text: body
        };

        await transport.sendMail(mailOptions); //esto devuelve una promesa

    } catch (error) {
        console.log(error);
        sendMailError();
    }
}

export default sendMailUtil;