export default function About() {
    return (
        <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 lg:px-16 flex flex-col gap-5">
            <header className="flex flex-col">
                <h1 className="mt-2 text-3xl sm:text-4xl">About me</h1>

                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                    I&apos;m a software developer who enjoys building things and learning through
                    projects. I work across the full stack, with a focus on backend development and
                    architecture. I&apos;m interested in cybersecurity and am currently completing a
                    Master of Information Technology, where I&apos;m specialising in cybersecurity.
                </p>
            </header>

            <section className="mt-5">
                <h2 className="text-xl text-primary mb-5">Education</h2>
                <div className="bg-card p-5 rounded-3xl ">
                    <div className="relative mt-8 ml-3 border-l border-border">
                        <div className="relative pb-10 pl-8">
                            <span className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-primary" />
                            <p className="text-xs text-muted-foreground">Present</p>
                            <h3 className="mt-1 text-base font-medium">
                                Master of Information Technology (QUT)
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Currently studying · Expected completion 2027
                            </p>
                        </div>
                        <div className="relative pb-10 pl-8">
                            <span className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-primary" />
                            <p className="text-xs text-muted-foreground">2025</p>
                            <h3 className="mt-1 text-base font-medium">
                                Graduate Certificate in Cybersecurity (UOW)
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Completed - High Disctinction
                            </p>
                        </div>
                        <div className="relative pl-8">
                            <span className="absolute -left-[5px] top-1 size-2.5 rounded-full bg-primary" />
                            <p className="text-xs text-muted-foreground">2023</p>
                            <h3 className="mt-1 text-base font-medium">
                                Bachelor of Computer Science (UNSW)
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Completed - Distinction{' '}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-16">
                <h2 className="text-xl text-primary">Areas of interest</h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-border bg-card p-5">
                        <h3 className="font-medium">Full-stack development</h3>
                    </div>

                    <div className="rounded-lg border border-border bg-card p-5">
                        <h3 className="font-medium">Backend development</h3>
                    </div>

                    <div className="rounded-lg border border-border bg-card p-5">
                        <h3 className="font-medium">Cybersecurity</h3>
                    </div>

                    <div className="rounded-lg border border-border bg-card p-5">
                        <h3 className="font-medium">Testing</h3>
                    </div>
                </div>
            </section>
        </div>
    );
}
