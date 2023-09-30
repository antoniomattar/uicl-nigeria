// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export async function POST(req: any) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      // Create a transporter with your email service credentials
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: 'antoniomattar123@gmail.com',
          pass: 'mnts qbuf uuca emyi',
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

      return {
        status: 200,
        body: JSON.stringify({ message: 'Email sent successfully' }),
      };
    } catch (error) {
      console.error(error);
      return {
        status: 500,
        body: JSON.stringify({ message: 'Email sending failed' }),
      };
    }
  } else {
    return {
      status: 405,
      body: JSON.stringify({ message: 'Nfekho' }),
    };
  }
}
