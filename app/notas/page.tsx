import { PostPagination } from "@/components/blog/post-pagination";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getAllPosts } from "@/lib/api";
import { Suspense } from "react";

export default function Home() {
    // Get all posts statically at build time
    const allPosts = getAllPosts([
        "title",
        "date",
        "slug",
        "author",
        "coverImage",
        "excerpt",
    ]);

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />

            {/* Hero Section - Full Width */}
            <section className="relative pt-32 pb-12 md:pt-40 md:pb-20 w-full backdrop-blur-3xl overflow-hidden">
                {/* Background grid pattern - Fixed Syntax */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4a4a5e_1px,transparent_1px),linear-gradient(to_bottom,#4a4a5e_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-50 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] -z-10" />

                {/* Glow effects */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-pulse -z-10" />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/40 rounded-full blur-3xl animate-pulse -z-10"
                    style={{ animationDelay: "1s" }}
                />

                <div className="container mx-auto px-4 relative z-10 text-center space-y-6 max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-1.5 text-sm backdrop-blur-sm animate-in fade-in zoom-in-50 duration-500 delay-150">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-muted-foreground font-medium">
                            Blog & Recursos
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
                        Nuestras{" "}
                        <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                            Notas
                        </span>
                    </h1>

                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                        Explora el archivo de conocimientos, noticias y
                        tutoriales de la comunidad VaSLibre.
                    </p>
                </div>
            </section>

            <div className="flex-1 container mx-auto px-4 pb-12 md:pb-16">
                <Suspense
                    fallback={
                        <div className="text-center py-20">
                            Cargando notas...
                        </div>
                    }
                >
                    <PostPagination allPosts={allPosts as any} />
                </Suspense>
            </div>
            <Footer />
        </main>
    );
}
