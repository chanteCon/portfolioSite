import Image from 'next/image';
type BrowserFrameProps = {
    src: string;
    alt: string;
    aspectRatio: string;
    className?: string;
};

export function BrowserFrame({ src, alt, aspectRatio, className }: BrowserFrameProps) {
    return (
        <div
            className={`w-full overflow-hidden rounded-xl border border-border bg-card ${className ?? ''}`}
        >
            <div className="flex h-9 items-center gap-1.5 border-b border-border bg-secondary px-3">
                <span className="size-2.5 rounded-full bg-muted-foreground/40" />
                <span className="size-2.5 rounded-full bg-muted-foreground/40" />
                <span className="size-2.5 rounded-full bg-muted-foreground/40" />

                <div className="ml-3 min-w-0 flex-1 truncate rounded-md bg-background px-3 py-1 text-[10px] text-muted-foreground">
                    playlist.chantellecs.com
                </div>
            </div>

            <div className={`relative ${aspectRatio}`}>
                <Image src={src} alt={alt} fill className="object-contain" />
            </div>
        </div>
    );
}
