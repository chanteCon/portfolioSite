import { LucideIcon } from 'lucide-react';

export default function ContactLink({
    href,
    Icon,
    text,
}: {
    href: string;
    Icon: LucideIcon;
    text: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-3 transition-colors hover:text-primary"
        >
            <Icon className="size-4" />
            {text}
        </a>
    );
}
