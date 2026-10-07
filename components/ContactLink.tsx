import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

export default function ContactLink({
    href,
    Icon,
    text,
    className,
}: {
    href: string;
    Icon: LucideIcon;
    text?: string;
    className?: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                className,
                'flex items-center gap-3 rounded-lg border bg-card p-3 transition-colors hover:text-primary hover:border-primary w-90 md:w-85',
            )}
        >
            <Icon className="size-4" />
            {text}
        </a>
    );
}
