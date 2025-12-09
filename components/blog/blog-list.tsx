import { Post } from "@/interfaces/post";
import { BlogCard } from "./blog-card";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
    posts: Post[];
    currentPage: number;
    totalPages: number;
};

export function BlogList({ posts, currentPage, totalPages }: Props) {
    return (
        <section className="space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <Pagination className="mt-12">
                    <PaginationContent>
                        {currentPage > 1 && (
                            <PaginationItem>
                                <PaginationPrevious
                                    href={`/notas?page=${currentPage - 1}`}
                                />
                            </PaginationItem>
                        )}

                        {/* Simple Pagination Logic: Show all if small, or minimal range */}
                        {Array.from(
                            { length: totalPages },
                            (_, i) => i + 1
                        ).map((page) => {
                            // Logic to show limited page numbers can be complex, for now let's show all if < 7, else snippet
                            // Since user asked for simple pagination, let's keep it simple for now or implement smart ellipsis

                            // Smartish pagination
                            const isEdge = page === 1 || page === totalPages;
                            const isNear = Math.abs(page - currentPage) <= 1;

                            if (!isEdge && !isNear) {
                                if (page === 2 || page === totalPages - 1) {
                                    return (
                                        <PaginationItem key={page}>
                                            <PaginationEllipsis />
                                        </PaginationItem>
                                    );
                                }
                                return null;
                            }

                            return (
                                <PaginationItem key={page}>
                                    <PaginationLink
                                        href={`/notas?page=${page}`}
                                        isActive={currentPage === page}
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            );
                        })}

                        {currentPage < totalPages && (
                            <PaginationItem>
                                <PaginationNext
                                    href={`/notas?page=${currentPage + 1}`}
                                />
                            </PaginationItem>
                        )}
                    </PaginationContent>
                </Pagination>
            )}
        </section>
    );
}
