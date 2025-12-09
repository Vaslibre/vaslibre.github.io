import { getAllPosts } from "@/lib/api";
import { BlogCard } from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Post } from "@/interfaces/post";

export function LatestPostsSection() {
    const allPosts = getAllPosts([
        "title",
        "date",
        "slug",
        "author",
        "coverImage",
        "excerpt",
    ]);

    const latestPosts = allPosts.slice(0, 3) as Post[];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-5 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Últimas Notas
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Mantente al día con nuestras últimas actividades,
                            artículos y noticias sobre el software libre en
                            Venezuela.
                        </p>
                    </div>
                    <Button asChild size="lg" className="group">
                        <Link href="/notas">
                            Ver todas las notas
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
