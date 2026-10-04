import Link from 'next/link';

type ProjectCardProps = {
    title: string;
    description: string;
    label: string;
    technologies: string[];
    href: string;
    featured?: boolean;
};

const chipClassName = 'rounded-md bg-secondary px-2 py-1 text-xs';

export default function ProjectCard({
    title,
    description,
    label,
    technologies,
    href,
    featured,
}: ProjectCardProps) {
    return (
        <Link
            href={href}
            className="group block rounded-xl border border-border bg-card p-5 transition-colors hover:border-accent/50 transition-transform duration-300 hover:scale-[1.03]"
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <div className="flex items-center gap-x-3">
                        <h4 className="text-lg font-medium group-hover:text-accent">{title}</h4>
                        {featured && <span className={chipClassName}>Featured</span>}
                    </div>
                </div>
                <div className="flex gap-2">
                    <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                    <span className="text-muted-foreground transition-transform group-hover:translate-x-2">
                        -&gt;
                    </span>
                </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">{description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                    <span key={technology} className={chipClassName}>
                        {technology}
                    </span>
                ))}
            </div>
        </Link>
    );
}
