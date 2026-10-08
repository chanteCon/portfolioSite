import GithubActivity from '@/components/GitActivityWidget';
import GithubActivitySkeleton from '@/components/GitHubActivitySkeleton';
import PlaylistCard from '@/components/PlaylistsCard';
import StackIcon from '@/components/StackIcon';

import Link from 'next/link';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Chantelle Conlon Scoullar | Software Developer',
    description:
        'Personal portfolio of Chantelle Conlon Scoullar, a software developer focused on full-stack and backend development.',
    alternates: {
        canonical: '/',
    },
};

export default function Home() {
    return (
        <div className="mx-auto flex w-full lg:max-w-6xl">
            <main className="flex w-full flex-col gap-y-10 bg-background px-6 py-10 sm:px-10 lg:px-16">
                <section className="grid gap-10 md:grid-cols-[1fr_auto] lg:mt-10 lg:gap-16">
                    <div className="flex min-w-0 flex-col gap-10">
                        <div className="max-w-xl">
                            <p className="text-sm text-accent">HI, I&apos;M CHANTELLE</p>

                            <h1 className="text-3xl sm:text-4xl">I&apos;m a</h1>

                            <h1 className="text-3xl text-accent sm:text-4xl">Software developer</h1>

                            <p className="mt-3 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">
                                I enjoy exploring new technologies, and learning through building
                                projects.
                            </p>
                            <Link
                                href="/about"
                                className="mt-4 inline-block text-sm text-primary hover:underline"
                            >
                                More info -&gt;
                            </Link>
                        </div>

                        <div className="flex flex-col gap-5">
                            <div>
                                <h3 className="text-xl text-accent">Tech stack</h3>

                                <p className="mt-1 max-w-md text-sm leading-5 text-muted-foreground">
                                    These are the technologies I&apos;m currently working with.
                                </p>
                            </div>

                            <div className="grid grid-cols-4 gap-x-3 gap-y-6 sm:grid-cols-5 sm:gap-x-5 lg:grid-cols-4">
                                <StackIcon
                                    src="/icons/typeScript.svg"
                                    name="TypeScript"
                                    description="I use TypeScript across my frontend and backend projects. The typing helps catch errors early and makes working with APIs easier."
                                />

                                <StackIcon
                                    src="/icons/nextdotjs.svg"
                                    name="Next.js"
                                    description="I use Next.js to build my web applications. It gives me routing, server components, data fetching, and other features on top of React without having to build them separately."
                                />

                                <StackIcon
                                    src="/icons/tanstack.svg"
                                    name="TanStack"
                                    description="I use TanStack Query to handle API data fetching. I prefer its built-in loading, error, and caching features over managing server state manually with React and Next.js."
                                />

                                <StackIcon
                                    src="/icons/tailwindcss.svg"
                                    name="Tailwind CSS"
                                    description="I use Tailwind to build responsive interfaces quickly. I like keeping styling close to the components I'm working on."
                                />

                                <StackIcon
                                    src="/icons/nodedotjs.svg"
                                    name="Node.js"
                                    description="I use Node.js for server-side TypeScript applications and backend development, including building APIs and handling server-side logic."
                                />

                                <StackIcon
                                    src="/icons/express.svg"
                                    name="Express"
                                    description="I use Express to build REST APIs. Its middleware and routing make it straightforward to organise authentication, validation, and other backend logic."
                                />

                                <StackIcon
                                    src="/icons/prisma.svg"
                                    name="Prisma"
                                    description="I use Prisma with TypeScript to work with PostgreSQL. Its generated types make database queries and relationships easier to work with safely in my code."
                                />

                                <StackIcon
                                    src="/icons/postgresql.svg"
                                    name="PostgreSQL"
                                    description="I use PostgreSQL for structured relational data. Relationships and constraints make it a good fit for applications like my playlist manager, where playlists, videos, collections, and users are connected."
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center md:min-w-[260px] lg:min-w-[300px]">
                        <Suspense fallback={<GithubActivitySkeleton />}>
                            <GithubActivity />
                        </Suspense>
                    </div>
                </section>

                <hr />

                <section className="flex flex-col gap-6">
                    <div>
                        <h3 className="text-xl text-accent">Featured project</h3>

                        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                            My current full-stack project exploring API design, backend architecture
                            and authentication.
                        </p>
                    </div>

                    <div className="w-full sm:w-[85%]">
                        <PlaylistCard />
                    </div>
                </section>
                <Link
                    href="/projects"
                    className="mt-4 inline-block text-sm text-primary hover:underline"
                >
                    See all projects -&gt;
                </Link>

                <hr />

                <section className="pt-5">
                    <div className="max-w-xl">
                        <h2 className="text-xl text-primary">Want to get in touch?</h2>

                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            If you want to get in touch you can find my contact details here.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-4 inline-block text-sm text-primary hover:underline"
                        >
                            Contact me -&gt;
                        </Link>
                    </div>
                </section>

                <hr />
            </main>
        </div>
    );
}
