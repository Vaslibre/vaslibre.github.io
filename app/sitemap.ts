// app/sitemap.ts
import type { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://vaslibre.org.ve',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
	];
}