import ProjectCard from '@/components/ProjectCard';

export default function NightCareCard() {
    return (
        <ProjectCard
            title="NightCare"
            label="Previously released · University team project"
            description="A thriller escape room game built in Unreal Engine 4 as a team project, focused on creating an interactive environment through puzzles, hints, and interactive objects."
            technologies={['Unreal Engine 4', 'Blueprints']}
            href="/projects/nightcare"
        />
    );
}
