export default function GithubActivitySkeleton() {
    return (
        <div className="p-3 lg:p-5 border rounded-lg bg-card w-[285px]">
            <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-green-500" />
                <div className="h-4 w-32 animate-pulse rounded bg-muted" />
            </div>

            <div className="flex flex-col mt-2">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="border-t border-border/50 px-3 py-2">
                        <div className="h-3 w-24 animate-pulse rounded bg-muted" />
                        <div className="mt-1 h-3 w-36 animate-pulse rounded bg-muted" />
                    </div>
                ))}
            </div>
        </div>
    );
}
