import { useState, useEffect } from "react";
import { ArrowRightIcon } from "lucide-react";

export default function HeroSection() {
    const identities = ["Content Creator", "Visual Storyteller", "Growth Partner"];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    // Typewriter logic
    useEffect(() => {
        if (subIndex === identities[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 1500); // কিছুক্ষণ থামবে
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % identities.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 75 : 150); // টাইপিং এবং ডিলিটিং স্পিড

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <main className="flex flex-col items-center pt-32 max-md:px-4">
            <img
                src="/assets/user-image.png"
                alt="Profile Image"
                className="size-36 rounded-full shadow-lg border-2 border-gray-100"
                width={144}
                height={144}
            />

            <h2 className="text-3xl md:text-5xl font-semibold mt-5 text-gray-900 leading-tight text-center">
                Arnob Biswas
            </h2>

            {/* নামের ঠিক নিচে গ্যাপ কমিয়ে টাইপরাইটার সেকশন (mt-1.5 ব্যবহার করা হয়েছে) */}
            <p className="text-2xl md:text-3xl font-mono mt-1.5 text-gray-600 h-10 flex items-center justify-center">
                {identities[index].substring(0, subIndex)}
                <span className="animate-pulse border-r-2 border-indigo-600 ml-1 h-6"></span>
            </p>

            <div className="mt-8">
                <button className="group bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-2.5 rounded-lg inline-flex items-center">
                    Resume
                    <ArrowRightIcon className="group-hover:translate-x-0.5 transition ml-1 size-5" />
                </button>
                <button className="border border-gray-400 hover:bg-gray-100/70 px-6 py-2.5 rounded-lg ml-4 transition-colors">
                    Connect me
                </button>
            </div>

            <div className="space-x-6 mt-12 flex items-center">
                {/* সোশ্যাল আইকনগুলো এখানে থাকবে (আগের মতো) */}
            </div>
        </main>
    );
}
