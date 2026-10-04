export default function GithubActivitySkeleton() {
    return (
        <div className="mt-4 rounded-lg border bg-card">
            <div className="flex items-center gap-2 px-3 py-3">
                <span className="size-2 rounded-full bg-green-500" />
                <h2 className="text-sm text-primary">Recent Git activity</h2>
            </div>

            <div className="flex flex-col">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="border-t border-border/50 px-3 py-2">
                        <div className="h-3 w-24 animate-pulse rounded bg-muted" />

                        <div className="mt-1 h-3 w-36 animate-pulse rounded bg-muted" />
                    </div>
                ))}
            </div>
        </div>
    );
}
