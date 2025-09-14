import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data } = await resend.emails.send({
      from: 'Next@email.com',
      to: 'shirinnazari.h@gmail.com',
      subject: 'hello world',
      html: '<h1>Hello world!!</h1>',
    });
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
