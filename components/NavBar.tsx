'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Switch } from './ui/switch';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useSyncExternalStore } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const { resolvedTheme, setTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';
    const navPageStyle = 'text-sm text-muted-foreground transition-colors hover:text-primary';
    const activePageStyle = 'text-sm text-primary';
    const emptySubscribe = () => () => {};
    const mounted = useSyncExternalStore(
        emptySubscribe,
        () => true,
        () => false,
    );

    if (!mounted) {
        <nav className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur"></nav>;
    }
    return (
        <nav className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16">
                <Link href="/" className="text-lg font-semibold text-primary">
                    CC
                </Link>

                <div className="flex items-center gap-5">
                    <Link
                        href="/"
                        className={`hidden md:block ${
                            '/' === pathname ? activePageStyle : navPageStyle
                        }`}
                    >
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
                        className="transition-opacity hover:opacity-70 hidden sm:block"
                    >
                        <Image src="/icons/github.svg" alt="GitHub" width={20} height={20} />
                    </a>
                </div>
                <div className="relative flex">
                    <Switch
                        checked={isDark}
                        onCheckedChange={(checked) => {
                            setTheme(checked ? 'dark' : 'light');
                        }}
                    />
                    {!isDark && (
                        <Sun className="pointer-events-none size-3 absolute top-1 left-1" />
                    )}
                    {isDark && (
                        <Moon className="pointer-events-none text-primary size-3 absolute top-[3px] right-[3px]" />
                    )}
                </div>
            </div>
        </nav>
    );
}
