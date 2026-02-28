interface Props {
    title: string;
    children: React.ReactNode;
}

export default function Section({ title, children }: Props) {
    return (
        /* এখানে justify-center সরিয়ে md:justify-start করা হয়েছে */
        <section className="flex flex-col md:flex-row items-center md:justify-start md:items-start gap-8 w-full max-w-4xl mx-auto mt-28">
            <p className="text-2xl text-center md:text-left md:text-xl font-medium pt-3 w-full md:max-w-42">
                {title}
            </p>
            {children}
        </section>
    );
}
