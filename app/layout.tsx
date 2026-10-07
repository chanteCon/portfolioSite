import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.chantellecs.com'),

    title: 'Chantelle Conlon Scoullar | Software Developer',
    description:
        'Personal portfolio of Chantelle Conlon Scoullar, a software developer focused on full-stack and backend development.',

    openGraph: {
        title: 'Chantelle Conlon Scoullar | Software Developer',
        description:
            'Personal portfolio of Chantelle Conlon Scoullar, a software developer focused on full-stack and backend development.',
        url: 'https://www.chantellecs.com',
        siteName: 'Chantelle Conlon Scoullar',
        type: 'website',
        images: [
            {
                url: '/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Chantelle Conlon Scoullar — Software Developer',
            },
        ],
    },
};
export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html
            suppressHydrationWarning
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased  font`}
        >
            <body className="min-h-full flex flex-col">
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <NavBar />
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
