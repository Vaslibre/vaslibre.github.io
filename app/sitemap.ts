// app/sitemap.ts
import type { MetadataRoute } from 'next';

import { getAllPosts } from "@/lib/api";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	const posts = getAllPosts(["slug", "date"]);
	const baseUrl = "https://vaslibre.org.ve";

	const postsUrls = posts.map((post) => ({
		url: `${baseUrl}/notas/${post.slug}`,
		lastModified: new Date(post.date!).toISOString(),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: `${baseUrl}/notas`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		...postsUrls,
	];
}