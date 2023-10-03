// pages/api/sendEmail.js
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    try {
      const data = await req.json();
      const { name, email, position, resume } = data;

      // Create a transporter with your email service credentials
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: 'antoniomattar123@gmail.com',
          pass: 'efll qrup oamg onxg',
        },
      });

      // Setup email data
      const mailOptions = {
        from: 'antoniomattar123@gmail.com',
        to: 'antoniomattar123@gmail.com',
        // to: 'jean.ad.mattar@gmail.com',
        cc: 'antoniomattar123@gmail.com',
        subject: 'New Profile For UICL',
        text: `
        Hello Mr Jean, you have a new profile candidating:

          Name: ${name}
          Email: ${email}
          Position: ${position}
          Resume: (Attached in the mail)

        Cordially,
        Sent by AntoBot
        `,
        attachments: [{ filename: 'resume.pdf', path: resume }],
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return NextResponse.json(
        { message: 'Email Sent Succesfully' },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: 'Email failed sending', problem: error },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: 'Nfekho' }, { status: 405 });
  }
}
