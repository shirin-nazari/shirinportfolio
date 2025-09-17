import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    const data = await resend.emails.send({
      // from: 'Acme <onboarding@resend.dev>',
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'shirinnazari.h@gmail.com',
      subject: `new message from ${name}`,
      html: `<p>${name}</p><p>Email:${email}</p><p>Message: ${message} </p>`,
    });
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
