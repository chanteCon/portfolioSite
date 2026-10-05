import { GitGraphIcon, Mail, Phone, UserPlus } from 'lucide-react';
import { GIT_URL, LINKEDIN_URL } from '../constants';
import ContactLink from '@/components/ContactLink';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
    return (
        <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16 sm:px-10 lg:px-16">
            <section>
                <p className="text-sm text-accent">GET IN TOUCH</p>

                <h1 className="mt-3 text-3xl text-primary sm:text-4xl">Contact me</h1>

                <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                    If you want to get in touch feel free to send me a message.
                </p>
            </section>
            <section className="flex flex-col gap-4">
                <h2 className="text-lg text-primary">Details</h2>

                <div className="flex flex-col gap-4 text-sm text-muted-foreground">
                    <ContactLink
                        href="mailto:chantelle.cs@outlook.com"
                        Icon={Mail}
                        text="chantelle.cs@outlook.com"
                    />
                    <ContactLink href="tel:+61413122769" Icon={Phone} text=" 0413 122 769" />
                    <ContactLink href={GIT_URL} Icon={GitGraphIcon} text="GitHub" />
                    <ContactLink href={LINKEDIN_URL} Icon={UserPlus} text="LinkedIn" />
                </div>
            </section>
            <section>
                <ContactForm />
            </section>
        </main>
    );
}
