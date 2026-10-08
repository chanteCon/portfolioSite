export default function TableSummary({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="w-full border-t p-4 text-xs">
            <h3 className="mb-1 font-medium border-b p-1">{title}</h3>
            <p className="leading-5 text-muted-foreground">{description}</p>
        </div>
    );
}
