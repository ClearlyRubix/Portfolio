
import ContactForm from "../components/sections/contact/ContactForm";
import ContactSection from "../components/sections/contact/ContactSection";

export default function Contact() {
    return (
        <main className="w-full">
            <div className="flex flex-col md:flex-row items-stretch">
                <div className="basis-1/2">
                    <ContactSection />
                </div>
                <div className="basis-1/2">
                    <ContactForm/>
                </div>
            </div>
        </main>
    );
}
