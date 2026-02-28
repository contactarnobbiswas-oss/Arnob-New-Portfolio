import Section from "../components/section";

export default function ContactSection() {
    return (
        <Section title="Contact Me">
            {/* mx-auto (ফোনে মাঝখানে), md:ml-0 md:mr-auto (পিসিতে বামে) */}
            {/* text-center (ফোনে টেক্সট মাঝখানে), md:text-left (পিসিতে বামে) */}
            <table className="table-auto mx-auto md:ml-0 md:mr-auto text-base text-center md:text-left">
                <tbody>
                    <tr>
                        <td className="pr-4 py-2">Email:</td>
                        <td className="py-2 text-gray-500">contact.arnobbiswas@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="pr-4 py-2">Phone:</td>
                        <td className="py-2 text-gray-500">+8801806581267</td>
                    </tr>
                </tbody>
            </table>
        </Section>
    );
}
