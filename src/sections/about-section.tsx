export default function AboutSection() {
    return (
        <Section title="About Me">
            {/* ফোনে মাঝখানে থাকবে (text-center), পিসিতে বামে (md:text-left) */}
            <div className="text-center md:text-left text-base/7">
                <p>
                    I’m Rayan Walker, a full-stack developer passionate about building end-to-end digital experiences...
                </p>
                <p className="mt-5">
                    Whether it’s crafting responsive interfaces or developing robust backend systems...
                </p>
            </div>
        </Section>
    );
}
