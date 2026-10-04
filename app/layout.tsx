import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Chantelle Conlon Scoullar | Software Developer',
    description:
        'Personal portfolio of Chantelle Conlon Scoullar, a software developer focused on full-stack development, backend development, and application architecture.',
    keywords: [
        'Chantelle Conlon Scoullar',
        'software developer',
        'full-stack developer',
        'backend developer',
        'Next.js',
        'TypeScript',
    ],
    authors: [{ name: 'Chantelle Conlon Scoullar' }],
    openGraph: {
        title: 'Chantelle Con | Software Developer',
        description:
            'Personal portfolio of Chantelle Conlon Scoullar, a software developer focused on full-stack development, backend development, and application architecture.',
        url: 'https://yourdomain.com',
        siteName: 'Chantelle Conlon Scoullar',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Chantelle Conlon Scoullar | Software Developer',
        description:
            'Personal portfolio of Chantelle Conlon Scoullar, a software developer focused on full-stack development, backend development, and application architecture.',
    },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased  font`}
        >
            <body className="min-h-full flex flex-col dark">
                <NavBar />
                {children}
            </body>
        </html>
    );
}
