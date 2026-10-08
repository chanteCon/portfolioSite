export default function Relationship({ left, right }: { left: string; right: string }) {
    return (
        <>
            <div className="hidden shrink-0 items-center gap-2 px-2 lg:flex">
                <span className="text-[10px] text-muted-foreground">{left}</span>

                <div className="h-px w-10 border-t border-dashed border-muted-foreground/50" />

                <span className="text-[10px] text-muted-foreground">{right}</span>
            </div>

            <div className="flex flex-col items-center py-2 lg:hidden">
                <span className="text-[10px] text-muted-foreground">
                    {left} : {right}
                </span>

                <div className="h-6 border-l border-dashed border-muted-foreground/50" />
            </div>
        </>
    );
}
