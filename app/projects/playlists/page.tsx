import Link from 'next/link';
import { ArrowUpRight, Check, Database, GitBranch, Hammer, Loader, Server } from 'lucide-react';

import { PLAYLISTS_API_URL, PLAYLISTS_URL } from '@/app/constants';
import { BrowserFrame } from '@/components/BrowserFrame';
import { FeatureCard } from '@/components/FeatureCard';

const technologies = [
    'Next.js',
    'TypeScript',
    'TanStack Query',
    'Tailwind CSS',
    'Express',
    'Zod',
    'OpenAPI',
    'Prisma',
    'PostgreSQL',
    'Redis',
    'Docker',
];

const features = [
    'Create and manage video playlists',
    'Load video link previews',
    'Add videos from YouTube and TikTok',
    'Search across playlists and videos',
    'Reorder videos within playlists',
    'Edit video titles and descriptions',
    'Choose playlist cover images',
    'Secure user authentication and resource ownership',
];

const currentlyDeveloping = [
    'Collections for organising playlists into groups',
    'Search across collections',
];

const upcomingFeatures = ['Rich text editor for video notes', 'Instagram support'];

export default function PlaylistManagerPage() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <p className="text-sm text-accent">FEATURED PROJECT</p>

                <h1 className="mt-3 text-4xl text-primary sm:text-5xl">Playlists</h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                    A full-stack web application for organising and managing video playlists from
                    different platforms across the internet.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                        href={PLAYLISTS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
                    >
                        Live site
                        <ArrowUpRight className="size-4" />
                    </Link>

                    <Link
                        href={PLAYLISTS_API_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-primary transition-colors hover:bg-secondary"
                    >
                        Live API
                        <ArrowUpRight className="size-4" />
                    </Link>

                    <Link
                        href="https://github.com/chanteCon/playlistManager"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-primary transition-colors hover:bg-secondary"
                    >
                        <GitBranch className="size-4" />
                        Backend
                    </Link>

                    <Link
                        href="https://github.com/chanteCon/playlistManagerFrontend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-primary transition-colors hover:bg-secondary"
                    >
                        <GitBranch className="size-4" />
                        Frontend
                    </Link>
                </div>
            </section>

            <section>
                <BrowserFrame
                    src="/images/playlists-screenshot.png"
                    alt="Playlists dashboard"
                    aspectRatio="aspect-[2926/1586]"
                />
            </section>

            <section className="max-w-3xl">
                <h2 className="text-2xl text-primary">Overview</h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    <p>
                        Playlists is a project I built to explore full-stack web development and
                        create a practical application around something I use regularly.
                    </p>

                    <p>
                        The application allows users to save videos from supported platforms into
                        playlists, organise those playlists into collections, and manage their saved
                        content from one place.
                    </p>

                    <p>
                        I built the frontend, backend API, database structure, authentication,
                        validation, testing, and deployment pipeline.
                    </p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl text-primary">Features</h2>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature}
                            text={feature}
                            icon={<Check className="mt-0.5 size-4 shrink-0 text-accent" />}
                        />
                    ))}
                </div>
            </section>

            <section>
                <div className="flex items-center gap-3">
                    <Hammer className="size-5 text-accent" />

                    <h2 className="text-2xl text-primary">Currently developing</h2>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {currentlyDeveloping.map((feature) => (
                        <FeatureCard
                            key={feature}
                            text={feature}
                            icon={<Loader className="mt-0.5 size-4 shrink-0 text-accent" />}
                        />
                    ))}
                </div>
            </section>

            <section>
                <div className="flex items-center gap-3">
                    <Loader className="size-5 text-accent" />

                    <h2 className="text-2xl text-primary">Upcoming features</h2>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {upcomingFeatures.map((feature) => (
                        <FeatureCard
                            key={feature}
                            text={feature}
                            icon={<Loader className="mt-0.5 size-4 shrink-0 text-accent" />}
                        />
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-2xl text-primary">Technology</h2>

                <p className="mt-3 max-w-2xl leading-6 text-muted-foreground">
                    The project uses a Next.js frontend and an Express REST API, with PostgreSQL as
                    the primary database and Redis for short-lived data.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                        <span
                            key={technology}
                            className="rounded-md border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </section>

            <section>
                <div className="flex items-center gap-3">
                    <Server className="size-5 text-accent" />

                    <h2 className="text-2xl text-primary">Architecture</h2>
                </div>

                <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    <p>
                        The frontend is built with Next.js and communicates with a separate Express
                        REST API. TanStack Query is used to manage server state, including fetching,
                        caching, mutations, and loading and error states.
                    </p>

                    <p>
                        The backend uses Prisma to interact with PostgreSQL. The database models
                        relationships between users, playlists, videos, and collections while using
                        database constraints to enforce relationships and uniqueness.
                    </p>

                    <p>
                        Redis is used for short-lived data that does not need to be persisted in
                        PostgreSQL. Docker is used during development to run the project&apos;s
                        supporting services locally.
                    </p>
                </div>
            </section>
            <section>
                <h2 className="text-2xl text-primary">Development and testing</h2>
                <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    <p>
                        The application is maintained across separate development, testing, and
                        production environments. Integration and end-to-end tests use isolated test
                        containers for postgres and redis to prevent test data from affecting other
                        environments.
                    </p>
                    <p>
                        The development environment uses Dockerised dependencies to keep local
                        development consistent, including services such as PostgreSQL, Redis, and a
                        local mail server. This allows features involving external services such as
                        email to be developed and tested locally without relying on production
                        services.
                    </p>
                </div>
            </section>
            <section>
                <h2 className="text-2xl text-primary">Responsive Design</h2>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                    I designed the application to adapt across different screen sizes, with layouts,
                    grids, and controls adjusting between mobile devices and large desktop monitors.
                </p>

                <div className="mt-6 flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center">
                    <BrowserFrame
                        src="/images/mobile-screenshot.png"
                        alt="Playlists mobile interface"
                        aspectRatio="aspect-[772/1464]"
                        className="max-w-[250px] lg:max-w-[280px]"
                    />

                    <BrowserFrame
                        src="/images/screenshot-desktop.png"
                        alt="Playlists desktop interface"
                        aspectRatio="aspect-[2930/1588]"
                        className="max-w-[750px] flex-1"
                    />
                </div>
            </section>

            <section>
                <h2 className="text-2xl text-primary">API design and type safety</h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    <p>
                        I use Zod to define and validate API schemas in the backend. These schemas
                        are also used to generate the project&apos;s OpenAPI documentation, keeping
                        the API specification close to the validation rules used by the application.
                    </p>

                    <p>
                        The OpenAPI specification is then used to generate TypeScript types for the
                        frontend. This gives the frontend a typed representation of the API contract
                        instead of maintaining request and response types separately.
                    </p>

                    <p>
                        This approach helps keep the frontend and backend aligned as the API
                        changes, while also providing validation at the API boundary and useful
                        documentation for the available endpoints.
                    </p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl text-primary">Authentication and security</h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    <p>
                        Authentication uses short-lived access tokens and refresh tokens stored in
                        secure HTTP-only cookies. Refresh tokens are rotated when they are used,
                        with reuse detection to invalidate compromised sessions. Email verification,
                        password reset and user login require two factor authenticated via a code
                        sent to the users email.
                    </p>

                    <p>
                        API requests also verify that resources belong to the authenticated user
                        before allowing them to be accessed or modified. Input is validated with Zod
                        before it reaches the application logic.
                    </p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl text-primary">Technical challenges</h2>

                <div className="mt-6 space-y-8">
                    <div>
                        <h3 className="text-lg text-primary">Authentication sessions</h3>

                        <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                            I implemented refresh-token rotation and reuse detection to manage
                            longer-lived sessions while keeping access tokens short-lived.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg text-primary">Video metadata</h3>

                        <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                            Adding a video requires retrieving metadata from the supported platform.
                            The backend validates the supplied URL and platform before retrieving
                            the relevant metadata rather than allowing arbitrary remote requests.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg text-primary">Client-side server state</h3>

                        <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                            The application has several related pieces of server state, such as
                            playlists and collections. I used TanStack Query to handle caching and
                            mutations while keeping the UI synchronised after changes.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex items-center gap-3">
                    <Database className="size-5 text-accent" />

                    <h2 className="text-2xl text-primary">Database design</h2>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                    PostgreSQL is used as the primary database because the application has several
                    connected resources. Users can have multiple playlists, playlists contain
                    videos, and playlists can belong to multiple collections. Prisma is used to
                    model these relationships and provide typed database access from the TypeScript
                    backend.
                </p>
            </section>

            <section className="max-w-3xl">
                <h2 className="text-2xl text-primary">What I learned</h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    <p>
                        This project gave me experience building a complete application rather than
                        working on an isolated feature. I worked across the frontend, backend,
                        database, authentication, testing, and deployment.
                    </p>

                    <p>
                        It also gave me a better understanding of how decisions in one part of an
                        application affect the rest of the system, particularly around API design,
                        database relationships, authentication, and client-side state.
                    </p>

                    <p>
                        The project is still something I continue to improve as I find areas where
                        the design or implementation can be made clearer.
                    </p>
                </div>
            </section>

            <section className="border-t border-border pt-8">
                <div className="flex flex-wrap gap-5 text-sm">
                    <Link
                        href={PLAYLISTS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary transition-colors hover:text-accent"
                    >
                        View live project -&gt;
                    </Link>

                    <Link
                        href="https://github.com/chanteCon/playlistManager"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary transition-colors hover:text-accent"
                    >
                        View backend on GitHub -&gt;
                    </Link>

                    <Link
                        href="https://github.com/chanteCon/playlistManagerFrontend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary transition-colors hover:text-accent"
                    >
                        View frontend on GitHub -&gt;
                    </Link>
                </div>
            </section>
        </div>
    );
}
