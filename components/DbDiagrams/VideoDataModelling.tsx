import { FileText, Globe, Hash, Key, KeyRound, Link2, Play, PlaySquare } from 'lucide-react';
import TableSummary from './TableSummary';
import Table from './Table';

export default function VideoDataModelling() {
    return (
        <div className="mt-6 w-full p-4 sm:p-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <div className="min-w-0">
                    <Table
                        Icon={Link2}
                        attributes={{
                            platform: { type: 'string', Icon: Globe },
                            platformId: { type: 'string', Icon: Hash },
                            canonicalUrl: { type: 'string', Icon: Link2 },
                        }}
                        title="VideoSource"
                    />

                    <TableSummary
                        title="VideoSource → Video"
                        description="A source can have many videos, while a video may optionally reference a source."
                    />
                </div>

                <div className="min-w-0">
                    <Table
                        Icon={Play}
                        attributes={{
                            url: { type: 'string', Icon: Link2 },
                            sourceId: { type: 'string', Icon: Key },
                        }}
                        title="Video"
                    />

                    <TableSummary
                        title="Video → PlaylistVideo"
                        description="A video can appear in multiple playlists through PlaylistVideo."
                    />
                </div>

                <div className="min-w-0">
                    <Table
                        Icon={Play}
                        attributes={{
                            videoId: { type: 'string', Icon: Key },
                            playlistId: { type: 'string', Icon: Key },
                            customTitle: { type: 'string', Icon: FileText },
                            customDescription: { type: 'string', Icon: FileText },
                        }}
                        title="PlaylistVideo"
                    />

                    <TableSummary
                        title="PlaylistVideo"
                        description="Each PlaylistVideo must reference exactly one video and one playlist. It also stores playlist-specific data."
                    />
                </div>

                <div className="min-w-0">
                    <Table
                        Icon={PlaySquare}
                        attributes={{
                            userId: { type: 'string', Icon: Key },
                        }}
                        title="Playlist"
                    />

                    <TableSummary
                        title="Playlist → PlaylistVideo"
                        description="A playlist can contain many videos, with each relationship represented by a PlaylistVideo."
                    />
                </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t pt-4 text-xs text-muted-foreground">
                <span className="font-medium text-primary">Legend</span>

                <span className="flex items-center gap-1.5">
                    <KeyRound className="size-3.5 text-yellow-500" />
                    Primary key
                </span>

                <span className="flex items-center gap-1.5">
                    <Key className="size-3.5" />
                    Foreign key
                </span>
            </div>
        </div>
    );
}
