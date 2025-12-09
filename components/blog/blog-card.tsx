import Link from "next/link";
import { type Post } from "@/interfaces/post";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DateFormatter } from "./date-formatter";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";

type Props = {
    post: Post;
    className?: string;
};

export function BlogCard({ post, className }: Props) {
    return (
        <Card
            className={cn(
                "group flex flex-col h-full overflow-hidden border-border/50 bg-card transition-all hover:shadow-lg hover:border-border",
                className
            )}
        >
            {/* Image Container - Switched from CardHeader to plain div to guarantee 0 padding */}
            <div className="w-full relative">
                <Link
                    href={`/notas/${post.slug}`}
                    className="block overflow-hidden active:scale-95 transition-transform duration-200"
                >
                    <div className="relative aspect-video w-full overflow-hidden bg-muted">
                        {/* bg-muted acts as placeholder if transparency exists */}
                        <img
                            src={post.coverImage}
                            alt={`Cover for ${post.title}`}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </Link>
            </div>

            <CardContent className="flex-1 p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <DateFormatter dateString={post.date} />
                </div>
                <Link
                    href={`/notas/${post.slug}`}
                    className="block group-hover:text-primary transition-colors"
                >
                    <h3 className="text-xl font-bold leading-tight mb-2 line-clamp-2">
                        {post.title}
                    </h3>
                </Link>
                <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                    {post.excerpt}
                </p>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8 border">
                        <AvatarImage
                            src={post.author.picture}
                            alt={post.author.name}
                        />
                        <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium opacity-80">
                        {post.author.name}
                    </span>
                </div>

                <Button
                    variant="ghost"
                    size="sm"
                    className="gap-1 px-4 hover:bg-primary hover:text-white transition-all duration-300 group/btn"
                    asChild
                >
                    <Link href={`/notas/${post.slug}`}>
                        Leer más{" "}
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
