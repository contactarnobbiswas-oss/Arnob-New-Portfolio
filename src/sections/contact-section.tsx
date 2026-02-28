import Section from "../components/section";

export default function ContactSection() {
    return (
        <Section title="Contact Me">
            {/* text-center (ফোনে মাঝখানে), md:text-left (পিসিতে বাকি সেকশনের মতো বামে অ্যালাইন) */}
            <div className="text-base text-center md:text-left space-y-3">
                
                {/* ইমেইল লাইন */}
                <p>
                    <span className="font-medium">Email: </span>
                    <span className="text-gray-500">contact.arnobbiswas@gmail.com</span>
                </p>

                {/* ফোন লাইন */}
                <p>
                    <span className="font-medium">Phone: </span>
                    <span className="text-gray-500">+8801806581267</span>
                </p>
                
            </div>
        </Section>
    );
}
