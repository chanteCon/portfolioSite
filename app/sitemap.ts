import type { MetadataRoute } from 'next';

const baseUrl = 'https://www.chantellecs.com';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: baseUrl,
        },
        {
            url: `${baseUrl}/about`,
        },
        {
            url: `${baseUrl}/projects`,
        },
        {
            url: `${baseUrl}/projects/playlists`,
        },
        {
            url: `${baseUrl}/contact`,
        },
    ];
}
