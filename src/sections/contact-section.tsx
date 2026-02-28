import Section from "../components/section";

export default function ContactSection() {
    return (
        <Section title="Contact Me">
            {/* এখানে text-base ক্লাসটি যোগ করে পুরো টেবিলের লেখা ১ সাইজ বড় করা হয়েছে */}
            <table className="table-auto mr-auto text-base">
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
