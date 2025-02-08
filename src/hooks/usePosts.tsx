import { useEffect, useState } from "react";

export interface IPost {
    id: number;
    title: string;
    description: string;
    category: string;
    author: string;
    date: string;
}

export function usePosts() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsLoading(true);
                const response = await fetch("https://dev.to/api/articles");
                if (!response.ok) {
                    throw new Error("Failed to fetch posts");
                }
                const data = await response.json();

                console.log(data);

                const formattedPosts: IPost[] = data.map((post: any) => ({
                    id: post.id,
                    title: post.title,
                    description: post.body,
                    category: post.tag_list.join(", ") || "General",
                    author: `User ${post.user_id}`,
                    date: new Date(post.published_at).toLocaleDateString(),
                }));

                setPosts(formattedPosts);
            } catch (error: any) {
                setError(error.message || "An error occurred");
            } finally {
                setIsLoading(false);
            }
        }

        fetchPosts();
    }, []);

    return { posts, isLoading, error };
}
