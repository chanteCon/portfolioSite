import NightCareCard from '@/components/NightCareCard';
import PlaylistCard from '@/components/PlaylistsCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects',
    description:
        'See projects by Chantelle Conlon Scoullar, a software developer focused on full-stack development.',
};

export default function Projects() {
    return (
        <div className="mx-auto flex w-full max-w-6xl">
            <main className="flex w-full flex-col gap-10 bg-background px-6 pb-10 sm:px-10 lg:px-16">
                <header>
                    <h1 className="text-3xl text-primary sm:text-4xl">Projects</h1>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                        A collection of projects I&apos;ve built while exploring different
                        technologies and ideas.
                    </p>
                </header>

                <div className="flex flex-col gap-5">
                    <PlaylistCard />
                    <NightCareCard />
                </div>
            </main>
        </div>
    );
}
