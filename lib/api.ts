import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "content/notes");

export function getPostSlugs() {
	return fs
		.readdirSync(postsDirectory, { withFileTypes: true })
		.filter((dirent) => {
			// Ignora archivos ocultos y carpetas ocultas
			if (dirent.name.startsWith(".")) return false;
			// Ignora .DS_Store específicamente
			if (dirent.name === ".DS_Store") return false;
			// Acepta solo archivos .md
			return dirent.isFile() && dirent.name.endsWith(".md");
		})
		.map((dirent) => dirent.name);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = join(postsDirectory, `${realSlug}.md`);

	try {
		const fileContents = fs.readFileSync(fullPath, "utf8");
		const { data, content } = matter(fileContents);

		type Items = {
			[key: string]: string | object | undefined;
		};

		const items: Items = {};

		// Ensure only the minimal needed data is returned
		if (fields.length === 0) {
			// If no fields specified, return everything including content
			return { ...data, slug: realSlug, content } as Post;
		}

		fields.forEach((field) => {
			if (field === "slug") {
				items[field] = realSlug;
			}
			if (field === "content") {
				items[field] = content;
			}
			if (typeof data[field] !== "undefined") {
				items[field] = data[field];
			}
		});

		return items as Partial<Post>;
	} catch (error) {
		console.error(`Error reading post: ${slug}`, error);
		return null;
	}
}

export function getAllPosts(fields: string[] = []): Partial<Post>[] {
	const slugs = getPostSlugs();
	const posts = slugs
		.map((slug) => getPostBySlug(slug, fields))
		.filter((post): post is Partial<Post> => post !== null)
		// @ts-ignore - Date comparison on Partial<Post>
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

	return posts;
}
