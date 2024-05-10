"use client";
import { FormEvent, useRef, useState } from "react";
import IconLoader from "../../icons/IconLoader";

const ContactForm = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [sendButtonDisabled, setSendButtonDisabled] = useState(false);
    const isSubmitting = useRef(false)
    const [errorMessage, setErrorMessage] = useState("There was an error.")

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (isSubmitting.current) return // ensure no duplicate submissions occur

        isSubmitting.current = true
        setSendButtonDisabled(true);

        const formData = new FormData(event.currentTarget)

        const email = formData.get("email")
        const subject = formData.get("subject")
        const message = formData.get("message")

        if (email == null || subject == null || message == null) {
            
            setSendButtonDisabled(false)
            setEmailError(true);
            setEmailSubmitted(false);
            setErrorMessage("There was a problem sending the email. Make sure all fields are filled in.")
            return
        }

        if (email?.toString().length == 0 || subject?.toString().length == 0 || message?.toString().length == 0) {
            
            setSendButtonDisabled(false)
            setEmailError(true);
            setEmailSubmitted(false);
            setErrorMessage("There was a problem sending the email. Make sure all fields are filled in.")
            return
        }
        const rawFormData = {
            email: email,
            subject: subject,
            message: message,
        };

        const JSONData = JSON.stringify(rawFormData);
        const endpoint = "api/sendEmail";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONData,
        };

        setEmailError(false);
        const response = await fetch(endpoint, options);
        // const response = { // testing purposes
        //     status: 200
        // }

        if (response.status === 200) {
            setEmailSubmitted(true);
        } else {
            setEmailError(true);
            setEmailSubmitted(false);
            setSendButtonDisabled(false);
            isSubmitting.current = false
            setErrorMessage("There was a problem sending the emai. Please try again later.")
        }
    };

    return (
        <div
            id="contact"
            className="flex flex-col border-2 border-zinc-800 rounded m-4 p-4"
        >
            <h2 className="font-bold text-sm text-zinc-100 uppercase tracking-widest pb-6">
                Contact Me
            </h2>
            {emailSubmitted ? (
                <div>
                    <p className="mt-2">Email Submitted Successfully!</p>
                </div>
            ) : (
                <>
                    {emailError ? (
                        <p className="mb-2 text-red-500">
                            {errorMessage}
                        </p>
                    ) : (
                        <></>
                    )}
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col text-sm w-full"
                    >
                        <div className="mb-6">
                            <label className="block mb-2">Your email</label>
                            <input
                                placeholder="name@example.com"
                                type="email"
                                name="email"
                                className="block w-full bg-zinc-800 border-2 border-zinc-200 rounded-md p-2"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2">Subject</label>
                            <input
                                placeholder="Hi Cayden, I'd like to hire you!"
                                type="text"
                                name="subject"
                                className="block w-full bg-zinc-800 border-2 border-zinc-200 rounded-md p-2"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block mb-2">Message</label>
                            <textarea
                                placeholder="Let's talk about..."
                                name="message"
                                className="block w-full bg-zinc-800 border-2 border-zinc-200 rounded-md p-2"
                            />
                        </div>
                        {sendButtonDisabled ? (
                            <div>
                                <IconLoader />
                            </div>
                        ) : (
                            <button
                                type="submit"
                                disabled={sendButtonDisabled}
                                className="text-md font-medium py-2 px-3 border-2 border-zinc-200 rounded-lg w-fit hover:bg-zinc-800"
                            >
                                Send Message
                            </button>
                        )}
                    </form>
                </>
            )}
        </div>
    );
};

export default ContactForm;
