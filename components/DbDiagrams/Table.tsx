import { cn } from '@/lib/utils';
import { ExternalLink, Key, KeyRound, Link, List, LucideIcon, Play } from 'lucide-react';

type Attribute = {
    type: string;
    Icon?: LucideIcon;
    iconClassName?: string;
};

type Attributes = Record<string, Attribute>;

const Row = ({
    field,
    type,
    Icon,
    iconClassName,
}: {
    field: string;
    type: string;
    Icon?: LucideIcon;
    iconClassName?: string;
}) => {
    return (
        <div className="flex items-center gap-2">
            {Icon && (
                <Icon className={cn('size-3.5 shrink-0 text-muted-foreground', iconClassName)} />
            )}

            <p>{field}</p>

            <p className="ml-auto text-xs text-muted-foreground">{type}</p>
        </div>
    );
};

export default function Table({
    Icon,
    attributes,
    title,
}: {
    Icon: LucideIcon;
    attributes: Attributes;
    title: string;
}) {
    return (
        <div className="w-full min-w-0 max-w-sm rounded-lg border bg-card p-2 text-xs">
            <div className="flex gap-5 items-center px-3">
                <Icon className="text-primary" />
                <p className="text-lg font-semibold">{title}</p>
            </div>

            <hr className="m-2" />

            <div className="flex flex-col gap-2">
                <Row field="id" type="string" Icon={KeyRound} iconClassName="text-yellow-500" />

                {Object.entries(attributes).map(([field, { type, Icon, iconClassName }]) => (
                    <Row
                        key={field}
                        field={field}
                        type={type}
                        Icon={Icon}
                        iconClassName={iconClassName}
                    />
                ))}
            </div>
        </div>
    );
}
