interface Props {
    title: string;
    children: React.ReactNode;
}

export default function Section({ title, children }: Props) {
    return (
        /* md:items-start যোগ করা হয়েছে যাতে টাইটেল এবং কন্টেন্ট একই লাইন থেকে শুরু হয় */
        <section className="flex flex-col md:flex-row items-center md:items-start md:justify-start gap-8 w-full max-w-4xl mx-auto mt-28">
            <p className="text-2xl text-center md:text-left md:text-xl font-medium pt-3 w-full md:max-w-42">
                {title}
            </p>
            {/* এখানে children বা তথ্যগুলো এখন টাইটেলের প্রথম লাইনের সাথে এলাইন হবে */}
            {children}
        </section>
    );
}
