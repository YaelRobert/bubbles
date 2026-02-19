import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
    return (
        <nav className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
            <Link href="/" className="text-2xl font-bold">
                Thought<span className="text-primary">Bubbles</span>
            </Link>
            <ModeToggle />
        </nav>
    );
}
