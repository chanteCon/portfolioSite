'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <div className="mx-auto w-full max-w-5xl">
            {pathname !== '/projects' && (
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                    <ArrowLeft className="size-4" />
                    Back to projects
                </Link>
            )}

            <main className="mt-10">{children}</main>
        </div>
    );
}
