'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();
    const navPageStyle = 'text-sm text-muted-foreground transition-colors hover:text-primary';
    const activePageStyle = 'text-sm text-primary';
    return (
        <nav className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16">
                <Link href="/" className="text-lg font-semibold text-primary">
                    CC
                </Link>

                <div className="flex items-center gap-5">
                    <Link href="/" className={'/' === pathname ? activePageStyle : navPageStyle}>
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className={'/about' === pathname ? activePageStyle : navPageStyle}
                    >
                        About
                    </Link>

                    <Link
                        href="/projects"
                        className={'/projects' === pathname ? activePageStyle : navPageStyle}
                    >
                        Projects
                    </Link>

                    <Link
                        href="/contact"
                        className={'/contact' === pathname ? activePageStyle : navPageStyle}
                    >
                        Contact
                    </Link>

                    <a
                        href="https://github.com/chanteCon"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="transition-opacity hover:opacity-70"
                    >
                        <Image src="/icons/github.svg" alt="GitHub" width={20} height={20} />
                    </a>
                </div>
            </div>
        </nav>
    );
}
