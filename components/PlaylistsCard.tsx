import ProjectCard from './ProjectCard';

export default function PlaylistCard() {
    return (
        <ProjectCard
            title="Playlists"
            label="Live . Solo project"
            description="A full-stack web application for organising and managing video playlists from different platforms across the internet."
            technologies={['Next.js', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Redis']}
            href="/projects/playlists"
            featured
        />
    );
}
