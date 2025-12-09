"use client";

import { useSearchParams } from "next/navigation";
import { BlogList } from "./blog-list";
import { Post } from "@/interfaces/post";

type Props = {
    allPosts: Post[];
};

export function PostPagination({ allPosts }: Props) {
    const searchParams = useSearchParams();
    const pageParam = searchParams.get("page");
    const page = pageParam ? parseInt(pageParam) : 1;
    const pageSize = 6;

    const totalPages = Math.ceil(allPosts.length / pageSize);
    const currentPage = page > 0 && page <= totalPages ? page : 1;

    const posts = allPosts.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (
        <BlogList
            posts={posts}
            currentPage={currentPage}
            totalPages={totalPages}
        />
    );
}
