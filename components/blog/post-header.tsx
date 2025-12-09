import { Avatar } from "./avatar";
import { DateFormatter } from "./date-formatter";
import { PostTitle } from "./post-title";
import { type Author } from "@/interfaces/author";

type Props = {
    title: string;
    coverImage: string;
    date: string;
    author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
    return (
        <div className="space-y-6">
            <PostTitle>{title}</PostTitle>

            <div className="flex items-center gap-2 text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
                <img
                    src={author.picture}
                    alt={author.name}
                    className="w-10 h-10 rounded-full border border-border"
                />
                <div className="flex flex-col text-sm text-left leading-tight">
                    <span className="font-semibold text-foreground">
                        {author.name}
                    </span>
                    <DateFormatter dateString={date} />
                </div>
            </div>
        </div>
    );
}
