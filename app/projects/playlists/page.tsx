import Link from 'next/link';
import {
    ArrowUpRight,
    Bot,
    BugOff,
    Check,
    Database,
    FileText,
    GitBranch,
    Hammer,
    Lock,
    MonitorSmartphone,
    Server,
} from 'lucide-react';

import { PLAYLISTS_API_URL, PLAYLISTS_URL } from '@/app/constants';
import { BrowserFrame } from '@/components/BrowserFrame';
import { FeatureCard } from '@/components/FeatureCard';
import { Metadata } from 'next';
import VideoDataModelling from '@/components/DbDiagrams/VideoDataModelling';

export const metadata: Metadata = {
    title: 'Playlists',
    description:
        'Full-stack cross platform video playlist management application built with Next.js, TypeScript, Express, Prisma, PostgreSQL, and Redis.',
    alternates: {
        canonical: '/projects/playlists',
    },
};

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
    'Collections for organising playlists into groups',
    'Search playlists, videos and playlist collections.',
    'Customise videos within playlists',
    'Re-order videos in playlists',
    'Choose playlist cover images',
];
const currentlyDeveloping = ['Rich text editor for video notes', 'Instagram support'];

export default function PlaylistManagerPage() {
    return (
        <div className="relative flex flex-col gap-12 sm:gap-16">
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
                    src="/images/playlists_light.png"
                    alt="Playlists dashboard"
                    aspectRatio="aspect-[2928/1588]"
                    className="block dark:hidden"
                />
                <BrowserFrame
                    src="/images/playlists-screenshot.png"
                    alt="Playlists dashboard"
                    aspectRatio="aspect-[2926/1586]"
                    className="hidden dark:block"
                />
            </section>

            <section className="max-w-3xl">
                <h2 className="sticky text-2xl text-primary">Overview</h2>

                <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    <p>
                        Playlists is an application that allows users to save videos from multiple
                        platforms into playlists and to group playlists into collections. This
                        allows users to manage content from different websites in one place.
                    </p>

                    <p>
                        The project involved building the frontend, backend API, database structure,
                        authentication, validation, testing, and managing the deployment.
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
                    <Bot className="size-5 text-accent" />
                    <h2 className="text-2xl text-primary">Tech Stack</h2>
                </div>
                <p className="mt-3  leading-6 text-muted-foreground">
                    Playlists is a full-stack TypeScript application. The backend uses Node.js,
                    Express, PostgreSQL, and Redis. The frontend uses Next.js and Tailwind CSS.
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
                        The backend separates routing, business logic and data access into
                        routes/controllers, services and repositories. The repositories use Prisma
                        to interact with PostgreSQL. The database models relationships between
                        users, playlists, videos, and collections while using database constraints
                        to enforce relationships and uniqueness.
                    </p>

                    <p>
                        Redis is used for short-lived data such as user access codes used during
                        authentication. Docker is used during development and testing to run the
                        project&apos;s supporting services locally.
                    </p>
                </div>
            </section>
            <section>
                <div className="flex items-center gap-3">
                    <BugOff className="size-5 text-accent" />
                    <h2 className="text-2xl text-primary">Development and testing</h2>
                </div>
                <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    <p>
                        For integration and end-to-end testing, isolated PostgreSQL and Redis
                        containers are used to prevent test data from leaking between tests.
                        Dockerised dependencies are used during development. This allows features
                        involving external services such as email to be developed and tested locally
                        without relying on production services.
                    </p>
                </div>
            </section>
            <section>
                <div className="flex items-center gap-3">
                    <MonitorSmartphone className="size-5 text-accent" />
                    <h2 className="text-2xl text-primary">Responsive Design</h2>
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                    I designed the application to adapt across different screen sizes, with pages
                    adjusting between mobile devices and large desktop monitors.
                </p>

                <div className="mt-6 flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center">
                    <BrowserFrame
                        src="/images/mobile_screenshot_light.png"
                        alt="Playlists mobile interface"
                        aspectRatio="aspect-[992/1596]"
                        className="max-w-[250px] lg:max-w-[280px] block dark:hidden"
                    />

                    <BrowserFrame
                        src="/images/desktop_screenshot_light.png"
                        alt="Playlists desktop interface"
                        aspectRatio="aspect-[2936/1598]"
                        className="max-w-[750px] flex-1 block dark:hidden"
                    />
                    <BrowserFrame
                        src="/images/mobile-screenshot.png"
                        alt="Playlists mobile interface"
                        aspectRatio="aspect-[772/1464]"
                        className="max-w-[250px] lg:max-w-[280px] hidden dark:block"
                    />

                    <BrowserFrame
                        src="/images/screenshot-desktop.png"
                        alt="Playlists desktop interface"
                        aspectRatio="aspect-[2930/1588]"
                        className="max-w-[750px] flex-1 hidden dark:block"
                    />
                </div>
            </section>

            <section>
                <div className="flex items-center gap-3">
                    <FileText className="size-5 text-accent" />
                    <h2 className="text-2xl text-primary">API and type safety</h2>
                </div>

                <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    <p>
                        I use Zod to define and validate API schemas in the backend. These schemas
                        are also used to generate the project&apos;s OpenAPI documentation, keeping
                        the API specification close to the validation rules used by the application.
                    </p>

                    <p>
                        The OpenAPI specification is then used to generate TypeScript types and a
                        typed client for the frontend. This approach helps keep the frontend and
                        backend aligned as the API changes, while also providing validation at the
                        API boundary and useful documentation for the available endpoints.
                    </p>
                </div>
            </section>

            <section>
                <div className="flex items-center gap-3">
                    <Lock className="size-5 text-accent" />
                    <h2 className="text-2xl text-primary">Security</h2>
                </div>

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
                <div className="flex items-center gap-3">
                    <Database className="size-5 text-accent" />

                    <h2 className="text-2xl text-primary">Database design</h2>
                </div>

                <p className="mt-5  text-sm leading-7 text-muted-foreground sm:text-base">
                    PostgreSQL is used as the primary database because the application has several
                    connected resources. Users can have multiple playlists, playlists contain
                    videos, and playlists can belong to multiple collections. Prisma is used to
                    model these relationships and provide typed database access from the TypeScript
                    backend.
                </p>
                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                    For example, when adding a video to a playlist a user submits the url of the
                    video. The app will then attempt to fetch data to generate a link preview of the
                    video. However, one video can have many url representations. To avoid redundant
                    data and duplicate fetches the app models video data using `VideoSource`,
                    `Video` and `PlaylistVideo`.{' '}
                </p>

                <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">
                    `Video` stores the original URL entered by the user, along with a `sourceId` if
                    that URL can be fetched. When possible, the URL is processed to identify its
                    canonical URL and its source data is fetched and stored in `VideoSource`. If the
                    same user entered URL is encountered again, the existing `Video` and source data
                    can be reused instead of performing another lookup. URLs that cannot be
                    processed are still stored as `Video` records, so they can be returned without
                    repeatedly attempting to fetch their source data. This separates three concerns:
                    `Video` retains the user&apos;s URL, `VideoSource` deduplicates shared source
                    data, and `PlaylistVideo` manages playlist membership and playlist-specific
                    information, such as custom titles and descriptions. The url processing
                    isn&apos;t completely foolproof, particularly with URL formats that are
                    difficult to process, but the model avoids unnecessary lookups and duplicate
                    source data where it can.
                </p>
                <br />
                <h3 className="mb-2 text-lg font-medium text-primary">Video modelling</h3>

                <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
                    PostgreSQL and Prisma are used to model the relationships between video sources,
                    videos and playlists.
                </p>

                <VideoDataModelling />
            </section>

            <section>
                <div className="flex items-center gap-3">
                    <Hammer className="size-5 text-accent" />

                    <h2 className="text-2xl text-primary">Ongoing Development</h2>
                </div>

                <p className="text-muted-foreground text-sm mt-5">
                    The project is still something I continue to improve as I find areas where the
                    design or implementation can be made clearer.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {currentlyDeveloping.map((feature) => (
                        <FeatureCard
                            key={feature}
                            text={feature}
                            icon={<Hammer className="mt-0.5 size-4 shrink-0 text-accent" />}
                        />
                    ))}
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
