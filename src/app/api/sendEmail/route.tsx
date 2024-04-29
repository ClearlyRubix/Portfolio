import EmailTemplate from "@/app/components/sections/contact/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import {Resend, ErrorResponse as ErrorResponseType} from "resend";

interface ErrorResponse extends ErrorResponseType {statusCode: number};


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
    const {email, subject, message} = await req.json()
    
    const { data, error } = await resend.emails.send({
        from: "contact@caydenbatten.com",
        to: ["contact@caydenbatten.com"],
        subject: subject,
        react: EmailTemplate({email: email, subject:subject, message})
    });

    const res_error = error as ErrorResponse;
    

    if (error) {
        return NextResponse.json(error, { status: res_error?.statusCode})
    }

    console.log(data)
    console.log(error)
    console.log(NextResponse.json(data))
    return NextResponse.json(data);

    
}