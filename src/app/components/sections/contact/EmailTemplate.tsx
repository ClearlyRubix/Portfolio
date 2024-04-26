import { Tailwind } from "@react-email/components";

const EmailTemplate = ({email, subject, message}: {email:String, subject:String, message:String}) => (
    <Tailwind>
        <div className="text-black bg-white">
            <h1 className="text-sm text-zinc-200 font-semibold mb-2 tracking-widest uppercase bg-zinc-900 px-2 py-2 w-fit">
                Message From Contact Form
            </h1>
            <div className="mb-2">
                <p>
                    <span className="font-semibold text-zinc-900">
                        {"From: "}
                    </span>
                    <a href={"mailto:"+email}>
                        {email}
                    </a>
                </p>
            </div>
            <div className="mb-2 text-sm">
                <span className="font-semibold text-zinc-900">
                        {"Subject: "}
                </span>
                {subject}
            </div>
            <p>
                {message}
            </p>
        </div>
    </Tailwind>
);

export default EmailTemplate