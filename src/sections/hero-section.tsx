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
            {/* প্রোফাইল ইমেজ */}
            <img
                src="/assets/user-image.png"
                alt="Arnob Biswas"
                className="size-36 rounded-full shadow-lg border-2 border-gray-100 object-cover"
                width={144}
                height={144}
            />

            {/* নাম (mt-5 স্পেসিং) */}
            <h2 className="text-3xl md:text-5xl font-semibold mt-5 text-gray-900 leading-tight">
                Arnob Biswas
            </h2>

            {/* টাইপরাইটার সেকশন - পজিশন ১০০% লক করা হয়েছে */}
            <div className="mt-1.5 flex justify-center w-full">
                <div className="relative inline-block text-left">
                    {/* ১. অদৃশ্য বেস: এটি বক্সের উইডথ লক করে রাখবে যাতে বাটন না নড়ে */}
                    <p className="text-2xl md:text-3xl font-mono invisible whitespace-nowrap px-4">
                        Visual Storyteller
                    </p>

                    {/* ২. আসল টেক্সট: এটি বাম দিক থেকে ফিক্সড হয়ে টাইপ হবে (একচুলও নড়বে না) */}
                    <div className="absolute top-0 left-0 w-full h-full flex items-center">
                        <p className="text-2xl md:text-3xl font-mono text-gray-600 whitespace-nowrap px-4">
                            {identities[index].substring(0, subIndex)}
                            <span className="inline-block w-0.5 h-7 bg-gray-600 ml-1 animate-pulse align-middle"></span>
                        </p>
                    </div>
                </div>
            </div>

            {/* বাটন সেকশন (mt-8 স্পেসিং) */}
            <div className="mt-8 flex items-center justify-center">
                <button className="group bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-2.5 rounded-lg inline-flex items-center transition-all">
                    Resume
                    <ArrowRightIcon className="group-hover:translate-x-0.5 transition ml-1 size-5" />
                </button>
                <button className="border border-gray-400 hover:bg-gray-100/70 text-gray-700 px-6 py-2.5 rounded-lg ml-4 transition-all">
                    Connect me
                </button>
            </div>

            {/* সোশ্যাল আইকন সেকশন (এখন ৪টি আইকন) */}
            <div className="space-x-6 mt-12 flex items-center justify-center text-gray-500">
                {/* Facebook */}
                <a href="#" target="_blank" className="hover:-translate-y-1 transition hover:text-blue-600">
                    <svg height={24} width={24} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>

                {/* Instagram */}
                <a href="#" target="_blank" className="hover:-translate-y-1 transition hover:text-pink-600">
                    <svg height={24} width={24} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path fill="currentColor" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.012 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.012 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.012-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.58.016 4.85.071 1.17.054 1.805.249 2.227.412.562.218.96.478 1.382.9.422.422.682.82.9 1.382.163.422.358 1.057.413 2.227.057 1.27.072 1.646.072 4.85s-.015 3.58-.072 4.85c-.055 1.17-.25 1.805-.413 2.227-.218.562-.478.96-.9 1.382-.422.422-.82.682-1.382.9-.422.163-1.057.358-2.227.413-1.27.057-1.646.072-4.85.072s-3.58-.015-4.85-.072c-1.17-.055-1.805-.25-2.227-.413-.562-.218-.96-.4771-1.381-.9-.422-.422-.682-.82-.9-1.382-.163-.422-.358-1.057-.413-2.227-.057-1.27-.072-1.646-.072-4.85s.015-3.58.072-4.85c.055-1.17.25-1.805.413-2.227.218-.562.478-.96.9-1.382.422-.422.82-.682 1.382-.9.422-.163 1.057-.358 2.227-.413 1.27-.057 1.646-.072 4.85-.072zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4.162 4.162 0 1 1 0-8.324A4.162 4.162 0 0 1 12 16zm6.406-11.845a1.44 1.44 0 1 1 0 2.88 1.44 1.44 0 0 1 0-2.88z"/></svg>
                </a>

                {/* Twitter X */}
                <a href="#" target="_blank" className="hover:-translate-y-1 transition hover:text-black">
                    <svg height={24} width={24} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path fill="currentColor" d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/></svg>
                </a>

                {/* LinkedIn */}
                <a href="#" target="_blank" className="hover:-translate-y-1 transition hover:text-blue-700">
                    <svg height={24} width={24} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
            </div>
        </main>
    );
}
