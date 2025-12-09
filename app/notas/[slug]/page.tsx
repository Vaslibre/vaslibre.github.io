import { PostBody } from "@/components/blog/post-body";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getPostBySlug, getPostSlugs } from "@/lib/api";
import { Container } from "@/components/container";
import { markdownToHtml } from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import { PostHeader } from "@/components/blog/post-header";
import { Metadata } from "next";
import { Post } from "@/interfaces/post";

type ParamsType = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateStaticParams() {
    const slugs = getPostSlugs();

    return slugs.map((filename: string) => ({
        slug: filename.replace(/\.md$/, ""),
    }));
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug) as Post;

    if (!post) {
        return notFound();
    }

    const content = await markdownToHtml(post.content || "");

    // JSON-LD for better SEO
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        image: post.coverImage ? [post.coverImage] : [],
        datePublished: post.date,
        dateModified: post.date,
        author: {
            "@type": "Person",
            name: post.author.name,
            image: post.author.picture,
        },
        description: post.excerpt,
        url: `https://vaslibre.org.ve/notas/${slug}/`,
    };

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Premium Hero Section */}
            <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 w-full backdrop-blur-3xl overflow-hidden">
                {/* Background grid pattern - Fixed Syntax */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4a4a5e_1px,transparent_1px),linear-gradient(to_bottom,#4a4a5e_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-50 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] -z-10" />

                {/* Glow effects */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-pulse -z-10" />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/40 rounded-full blur-3xl animate-pulse -z-10"
                    style={{ animationDelay: "1s" }}
                />

                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <PostHeader
                            title={post.title}
                            coverImage={post.coverImage}
                            date={post.date}
                            author={post.author}
                        />
                    </div>
                </Container>
            </section>

            <div className="flex-1 pb-12 md:pb-16 pt-0">
                <Container>
                    <PostBody content={content} />
                </Container>
            </div>

            <Footer />
        </main>
    );
}

export async function generateMetadata(props: ParamsType): Promise<Metadata> {
    const { slug } = await props.params;
    const post = getPostBySlug(slug) as Post;

    console.log(post.excerpt);
    if (!post) {
        return notFound();
    }

    const title = `${post.title} - VaSLibre`;
    const url = `https://vaslibre.org.ve/notas/${slug}/`;

    return {
        title,
        description: post.excerpt,
        openGraph: {
            title,
            description: post.excerpt,
            images: [post.ogImage.url],
            url,
        },

        alternates: {
            canonical: url,
        },
    };
}
