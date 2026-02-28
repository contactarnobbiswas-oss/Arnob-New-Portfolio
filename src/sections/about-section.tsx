import Section from "../components/section";

export default function AboutSection() {
    return (
        <Section title="About Me">
            {/* এখানে text-base/7 এর সাথে text-center (মোবাইল) এবং md:text-left (পিসি) যোগ করা হয়েছে */}
            <div className="text-base/7 text-center md:text-left">
                <p>
                    I’m Rayan Walker, a full-stack developer passionate about building end-to-end digital experiences that are fast, scalable and user-focused. With strong expertise in both front-end and back-end technologies, I enjoy transforming ideas into fully functional web applications that feel seamless and intuitive.
                </p>
                <p className="mt-5">
                    Whether it’s crafting responsive interfaces or developing robust backend systems, I aim to deliver solutions that are both reliable and impactful.
                </p>
            </div>
        </Section>
    );
}
