import { useState, useEffect } from 'react';

interface IPost {
    id: number;
    title: string;
    description: string;
    category: string;
    author: string;
    date: string;
}

export function usePostById(id: number) {
    const [post, setPost] = useState<IPost | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;

        async function fetchPostById() {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch the post');
                }
                const data = await response.json();

                const formattedPost: IPost = {
                    id: data.id,
                    title: data.title,
                    description: data.description,
                    category: 'Uncategorized',
                    author: 'Unknown',
                    date: new Date().toISOString(),
                };

                setPost(formattedPost);
            } catch (err: any) {
                setError(err.message || 'An error occurred');
            } finally {
                setIsLoading(false);
            }
        }

        fetchPostById();
    }, [id]);

    return { post, isLoading, error };
}
