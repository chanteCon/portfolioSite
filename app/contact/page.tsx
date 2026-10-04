import { GitGraphIcon, Mail, Phone, UserPlus } from 'lucide-react';

import { GIT_URL, LINKEDIN_URL } from '../constants';

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
                    <a
                        href="mailto:chantelle.cs@outlook.com"
                        className="flex w-fit items-center gap-3 transition-colors hover:text-primary"
                    >
                        <Mail className="size-4" />
                        chantelle.cs@outlook.com
                    </a>

                    <a
                        href="tel:+61413122769"
                        className="flex w-fit items-center gap-3 transition-colors hover:text-primary"
                    >
                        <Phone className="size-4" />
                        0413 122 769
                    </a>

                    <a
                        href={GIT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-fit items-center gap-3 transition-colors hover:text-primary"
                    >
                        <GitGraphIcon className="size-4" />
                        GitHub
                    </a>

                    <a
                        href={LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex w-fit items-center gap-3 transition-colors hover:text-primary"
                    >
                        <UserPlus className="size-4" />
                        LinkedIn
                    </a>
                </div>
            </section>
        </main>
    );
}
