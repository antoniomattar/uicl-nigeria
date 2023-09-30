// pages/api/sendEmail.js
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    try {
      const data = await req.json();
      const { name, email, position, resume } = data;
      console.log(data);

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
        subject: 'New Profile For UICL',
        text: `Name: ${name} \n Email: ${email} \n Position: ${position} \n Resume: ${resume}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return NextResponse.json(
        { message: 'Email Sent Succesfully' },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: 'Email failed sending', error: error },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: 'Nfekho' }, { status: 405 });
  }
}
