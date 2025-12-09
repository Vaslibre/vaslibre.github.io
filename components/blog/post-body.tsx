type Props = {
    content: string;
};

export function PostBody({ content }: Props) {
    return (
        <div className="max-w-3xl mx-auto prose prose-lg prose-slate dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl [&>:first-child]:mt-0">
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}
