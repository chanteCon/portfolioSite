'use client';

import Image from 'next/image';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

type StackIconProps = {
    src: string;
    name: string;
    description: string;
};

export default function StackIcon({ src, name, description }: StackIconProps) {
    return (
        <Tooltip>
            <TooltipTrigger className="group flex w-12 cursor-pointer flex-col items-center gap-1">
                <div className="transition-transform duration-200 group-hover:scale-125">
                    <Image
                        src={src}
                        alt={name}
                        width={40}
                        height={40}
                        className="size-7 rounded-sm bg-white lg:size-10"
                    />
                </div>

                <p className="text-center text-xs text-muted-foreground">{name}</p>
            </TooltipTrigger>

            <TooltipContent>
                <p className="font-medium">{name}</p>
                <p className="max-w-48 text-xs text-muted-foreground">{description}</p>
            </TooltipContent>
        </Tooltip>
    );
}
