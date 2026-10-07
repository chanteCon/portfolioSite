import { GitGraphIcon, Mail, Phone, UserPlus } from 'lucide-react';
import { GIT_URL, LINKEDIN_URL } from '../constants';
import ContactLink from '@/components/ContactLink';
import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Contact Chantelle Conlon Scoullar about software development.',
};

export default function ContactPage() {
    return (
        <main className="mx-auto flex w-full max-w-5xl gap-y-10 flex-col md:flex-row px-6 py-16 md:px-10 lg:px-16 items:center">
            <section className="w-full md:mt-15 md:text-left flex flex-col items-center md:items-start">
                <p className="text-md text-accent  w-full max-w-100">GET IN TOUCH</p>

                <h1 className="mt-3 text-3xl text-primary md:text-4xl w-full max-w-100">
                    Contact me
                </h1>
                <p className="text-muted-foreground text-md hidden md:block mt-4">
                    If you would like to talk, send me a message
                </p>
                <div className="text-muted-foreground flex flex-col gap-3 mt-5 md:mt-10">
                    <ContactLink href={GIT_URL} Icon={GitGraphIcon} text="GitHub" />
                    <ContactLink href={LINKEDIN_URL} Icon={UserPlus} text="LinkedIn" />
                    <ContactLink
                        href="mailto:chantelle.cs@outlook.com"
                        Icon={Mail}
                        text="chantelle.cs@outlook.com"
                    />
                    <ContactLink href="tel:+61413122769" Icon={Phone} text=" 0413 122 769" />
                </div>
            </section>
            <section className="w-full flex flex-col items-center gap-5">
                <p className="text-primary text-lg block md:hidden text-start w-full max-w-100">
                    Send me a message
                </p>
                <ContactForm className="md:mt-20" />
            </section>
        </main>
    );
}
