import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Email } from "../../../../emails/index";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API);

export async function POST(request) {
  const { firstName, lastName, email, number, message, countryCode } = await request.json();

  try {
    await Promise.all([
      resend.emails.send({
        from: "Contact Form Submission <noreply@transbuild.com>",
        to: "info@transbuild.com",
        subject: "Transbuild Website Contact Form Submission",
        react: Email({
          firstname: firstName,
          lastname: lastName,
          email,
          number,
          countryCode,
          message,
        }),
      }),
    ]);

    return NextResponse.json({ status: "Email sent" });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ status: "Error" }, { status: 500 });
  }
}
