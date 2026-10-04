import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
    return (
        <div className="mx-auto flex w-full max-w-6xl">
            <main className="flex w-full flex-col gap-10 bg-background px-6 py-16 sm:px-10 lg:px-16">
                <header>
                    <h1 className="text-3xl text-primary sm:text-4xl">Projects</h1>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                        A collection of projects I&apos;ve built while exploring different
                        technologies and ideas.
                    </p>
                </header>

                <div className="grid gap-5 md:grid-cols-2">
                    <ProjectCard
                        title="Playlist Manager"
                        label="Live · Solo project"
                        description="A full-stack web application for organising and managing video playlists from different platforms across the internet."
                        technologies={[
                            'Next.js',
                            'TypeScript',
                            'Express',
                            'Prisma',
                            'PostgreSQL',
                            'Redis',
                        ]}
                        href="/projects/playlist-manager"
                        featured
                    />

                    <ProjectCard
                        title="NightCare"
                        label="Previously released · University team project"
                        description="A thriller escape room game built in Unreal Engine 4 as a team project, focused on creating an interactive environment through puzzles, hints, and interactive objects."
                        technologies={['Unreal Engine 4', 'Blueprints']}
                        href="/projects/nightcare"
                    />
                </div>
            </main>
        </div>
    );
}
