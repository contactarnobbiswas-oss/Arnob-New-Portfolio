export default function AboutSection() {
    return (
        <Section title="About Me">
            {/* text-sm থেকে বাড়িয়ে text-base করা হয়েছে */}
            <div className="text-base/7 text-gray-600">
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
