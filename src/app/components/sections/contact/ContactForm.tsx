"use client"
import { FormEvent, useState } from "react"


const ContactForm = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false)
    const [emailError, setEmailError] = useState(false)

    const handleSubmit = async (formData: FormData) => {

        const rawFormData = {
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message")
        }
    
        const JSONData = JSON.stringify(rawFormData)
        const endpoint = "api/sendEmail"
    
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSONData
        }
        
        setEmailError(false)
        const response = await fetch(endpoint, options)
        // const resData = await response.json()
        console.log(response)
        if (response.status === 200) {
            setEmailSubmitted(true)
        } else {
            setEmailError(true)
            setEmailSubmitted(false)
        }
    
    }

    return (
        <div id="contact" className="flex flex-col border-2 border-zinc-800 rounded m-4 p-4 h-full">
            <h2 className="font-bold text-sm text-zinc-100 uppercase tracking-widest pb-6">
                Contact Me
            </h2>
            {emailSubmitted ? 
                <div>
                    <p className="mt-2">Email Submitted Successfully!</p>
                </div>
            :
            <>
            {emailError ? 
            <p className="mb-2 text-red-500">There was a problem sending the emai. Please try again later.</p>    
            :
            <></>
            }
            <form 
                action={handleSubmit}
                className="flex flex-col text-sm w-full"
            >
            <div className="mb-6">
                <label className="block mb-2">
                    Your email
                </label>
                <input
                    placeholder="name@example.com"
                    type="email"
                    name="email"
                    className="block w-full bg-zinc-800 border-2 border-zinc-200 rounded-md p-2"

                />
            </div>
            <div className="mb-6">
                <label className="block mb-2">
                    Subject
                </label>
                <input
                    placeholder="Hi Cayden, I'd like to hire you!"
                    type="text"
                    name="subject"
                    className="block w-full bg-zinc-800 border-2 border-zinc-200 rounded-md p-2"
                />
            </div>
            <div className="mb-6">
                <label className="block mb-2">
                    Message
                </label>
                <textarea
                    placeholder="Let's talk about..."
                    name="message"
                    className="block w-full bg-zinc-800 border-2 border-zinc-200 rounded-md p-2"
                />
            </div>
            <button
                type="submit"
                className="text-md font-medium py-2 px-3 border-2 border-zinc-200 rounded-lg w-fit hover:bg-zinc-800"
            >
                Send Message
            </button>
        </form>
        </>
        }
            
        </div>
    )
}

export default ContactForm