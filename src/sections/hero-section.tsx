import { useState, useEffect } from "react";
import { ArrowRightIcon } from "lucide-react";

export default function HeroSection() {
    const identities = ["Content Creator", "Visual Storyteller", "Growth Partner"];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (subIndex === identities[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 1500);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % identities.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 75 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <main className="flex flex-col items-center pt-32 max-md:px-4 text-center">
            <img
                src="/assets/user-image.png"
                alt="Arnob Biswas"
                className="size-36 rounded-full shadow-lg border-2 border-gray-100 object-cover"
                width={144}
                height={144}
            />

            <h2 className="text-3xl md:text-5xl font-semibold mt-5 text-gray-900 leading-tight">
                Arnob Biswas
            </h2>

            {/* টাইপরাইটার সেকশন - পজিশন লক করা হয়েছে */}
            <div className="relative h-12 flex items-center justify-center mt-1 w-full overflow-hidden">
                {/* ১. ইনভিজিবল টেক্সট: এটি জায়গাটুকুকে ধরে রাখবে যাতে বাটন বা লেখা না নড়ে */}
                <p className="text-2xl md:text-3xl font-mono opacity-0 pointer-events-none select-none">
                    Visual Storyteller
                </p>

                {/* ২. একচুয়াল টাইপিং টেক্সট: এটি ওপরের ফিক্সড জায়গার ওপর ভাসমান থাকবে */}
                <p className="text-2xl md:text-3xl font-mono text-gray-600 absolute inset-0 flex items-center justify-center">
                    {identities[index].substring(0, subIndex)}
                    <span className="inline-block w-0.5 h-7 bg-indigo-600 ml-1 animate-pulse align-middle"></span>
                </p>
            </div>

            <div className="mt-8 flex items-center justify-center">
                <button className="group bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-2.5 rounded-lg inline-flex items-center transition-all">
                    Resume
                    <ArrowRightIcon className="group-hover:translate-x-0.5 transition ml-1 size-5" />
                </button>
                <button className="border border-gray-400 hover:bg-gray-100/70 text-gray-700 px-6 py-2.5 rounded-lg ml-4 transition-all">
                    Connect me
                </button>
            </div>

            <div className="space-x-6 mt-12 flex items-center justify-center text-gray-600">
                {/* সোশ্যাল আইকনগুলো এখানে বসবে */}
            </div>
        </main>
    );
}
