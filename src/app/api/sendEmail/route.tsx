// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

const sendEmail = async (req: any, res: any) => {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      // Create a transporter with your email service credentials
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: 'antoniomattar123@gmail.com',
          pass: 'Celtics10$#@',
        },
      });

      // Setup email data
      const mailOptions = {
        from: 'antoniomattar123@gmail.com',
        to: 'antoniomattar123@gmail.com',
        subject: 'New Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Email sending failed' });
    }
  } else {
    res.status(405).json({ message: 'Nfekho' });
  }
};

export default sendEmail;
