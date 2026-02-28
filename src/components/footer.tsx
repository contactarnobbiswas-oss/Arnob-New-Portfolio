export default function Footer() {
    return (
        <footer className="mt-32 w-full text-center py-8 text-gray-500 border-t border-gray-200 text-sm">
            <p>
                © {new Date().getFullYear()} Arnob Biswas • All rights reserved.
            </p>
        </footer>
    );
}
