import GithubActivity from '@/components/GitActivityWidget';
import GithubActivitySkeleton from '@/components/GitHubActivitySkeleton';
import NightCareCard from '@/components/NightCareCard';
import PlaylistCard from '@/components/PlaylistsCard';
import StackIcon from '@/components/StackIcon';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Home() {
    return (
        <div className="mx-auto flex w-full lg:max-w-6xl">
            <main className="flex w-full flex-col bg-background px-6 py-16 sm:px-10 lg:px-16 gap-y-10">
                <section className="flex  flex-col gap-12 md:flex-row items-center lg:justify-between lg:mt-10">
                    <div className="max-w-xl">
                        <p className="text-sm text-accent">HI, I&apos;M CHANTELLE</p>

                        <h1 className="mt-3 text-3xl sm:text-4xl">I&apos;m a</h1>
                        <div className="flex items-center gap-2">
                            <h1 className="text-3xl text-accent sm:text-4xl">Software developer</h1>
                        </div>
                        <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">
                            I enjoy building apps, exploring new technologies, and learning through
                            projects.
                        </p>
                    </div>
                    <Suspense fallback={<GithubActivitySkeleton />}>
                        <GithubActivity />
                    </Suspense>
                </section>
                <hr />

                <section className="flex w-full flex-col gap-5">
                    <div className="flex gap-2 flex-col">
                        <h3 className="text-xl text-accent">Tech stack</h3>
                        <p className="max-w-md text-sm leading-5 text-muted-foreground ">
                            These are the technologies I&apos;m currently working with.
                        </p>
                    </div>

                    <div className="grid grid-cols-5 gap-y-5 sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-5 lg:gap-x-7">
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

                        <StackIcon
                            src="/icons/redis.svg"
                            name="Redis"
                            description="I use Redis for short-lived data that doesn't need to be stored in PostgreSQL, such as temporary user access codes."
                        />
                    </div>
                </section>
                <hr />
                <section className="flex flex-col gap-6">
                    <div>
                        <h3 className="text-xl text-accent">Projects</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                            A selection of projects that showcase my experience, interests, and the
                            things I enjoy building.
                        </p>
                    </div>

                    <div className="grid gap-5 lg:grid-cols-2">
                        <PlaylistCard />

                        <NightCareCard />
                    </div>
                </section>
                <hr />
                <section className=" pt-5">
                    <div className="max-w-xl">
                        <h2 className="text-xl text-primary">Want to get in touch?</h2>

                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            If you want to get in touch you can find my contact details here.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-4 inline-block text-sm text-primary hover:underline"
                        >
                            Contact me →
                        </Link>
                    </div>
                </section>
                <hr />
            </main>
        </div>
    );
}
