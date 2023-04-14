// pages/api/sendEmail.ts
import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey('');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, phone, email, subject, message } = req.body;

    const content = {
      to: 'caseymerritt8976@gmail.com',
      from: 'automated@caseymerritt.com',
      subject: `New Message from ${name} - ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n${message}`,
    };

    try {
      await sgMail.send(content);
      res.status(200).send('Message sent successfully.');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email.');
    }
  } else {
    res.status(405).send('Method not allowed.');
  }
}
