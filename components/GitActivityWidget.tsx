import { GIT_URL } from '@/app/constants';

type GithubEvent = {
    id: string;
    type: string;
    created_at: string;
    repo: {
        name: string;
    };
};

const getGithubActivity = async (): Promise<GithubEvent[]> => {
    const response = await fetch('https://api.github.com/users/chanteCon/events/public', {
        headers: {
            Accept: 'application/vnd.github+json',
        },
        next: {
            revalidate: 300,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch GitHub activity');
    }

    return response.json();
};

const timeAgo = (date: string) => {
    const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);

    if (seconds < 60) return 'just now';

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;

    const days = Math.floor(hours / 24);
    return `${days}d ago`;
};

const getActivityText = (event: GithubEvent) => {
    switch (event.type) {
        case 'PushEvent':
            return 'Pushed changes';

        case 'PullRequestEvent':
            return 'Updated a pull request';

        case 'IssuesEvent':
            return 'Updated an issue';

        case 'CreateEvent':
            return 'Created something';

        case 'DeleteEvent':
            return 'Deleted something';

        case 'ReleaseEvent':
            return 'Published a release';

        default:
            return 'Made changes';
    }
};

export default async function GithubActivity() {
    const events = await getGithubActivity();
    const activities = events
        .map((event) => ({
            repo: event.repo.name.split('/')[1],
            action: getActivityText(event),
            createdAt: event.created_at,
            repoUrl: `${GIT_URL}${event.repo.name.split('/')[1]}`,
        }))
        .filter((activity) => activity.action)
        .slice(0, 3);
    return (
        <div className="p-3 lg:p-5 border rounded-lg bg-card w-[285px]">
            <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-green-500" />
                <a href={GIT_URL} rel="noopener noreferrer" target="_blank">
                    <h2 className="text-sm text-primary underline hover:font-semibold">
                        Recent Git activity
                    </h2>
                </a>
            </div>
            <div className="flex flex-col mt-2">
                {activities.map((activity, index) => (
                    <a
                        key={`${activity.repo}-${activity.createdAt}`}
                        href={activity.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group block px-3 py-2 transition-colors hover:bg-secondary/50 ${
                            index > 0 ? 'border-t border-border/50' : ''
                        }`}
                    >
                        <div className="flex gap-1 group-hover:text-accent justify-between">
                            <p className="text-xs">{activity.repo}</p>
                            <p className="text-xs transition-transform duration-200 group-hover:translate-x-1">
                                →
                            </p>
                        </div>

                        <p className="text-xs text-muted-foreground">
                            {activity.action} · {timeAgo(activity.createdAt)}
                        </p>
                    </a>
                ))}
            </div>
        </div>
    );
}
