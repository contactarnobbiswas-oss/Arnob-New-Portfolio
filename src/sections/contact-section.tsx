import Section from "../components/section";

export default function ContactSection() {
    return (
        <Section title="Contact Me">
            {/* items-center (ফোনে সব মাঝখানে), md:items-start (পিসিতে বামে) */}
            <div className="flex flex-col items-center md:items-start space-y-3 text-base">
                
                {/* ইমেইল লাইন */}
                <p className="flex flex-row items-center">
                    <span className="font-medium mr-2">Email:</span>
                    <span className="text-gray-500">contact.arnobbiswas@gmail.com</span>
                </p>

                {/* ফোন লাইন */}
                <p className="flex flex-row items-center">
                    <span className="font-medium mr-2">Phone:</span>
                    <span className="text-gray-500">+8801806581267</span>
                </p>
                
            </div>
        </Section>
    );
}
