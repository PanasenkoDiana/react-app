import { useState, useEffect } from 'react';

interface IPost {
    id: number;
    title: string;
    description: string;
    category: string;
    author: string;
    date: string;
}

export function usePosts() {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPosts() {
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();

                // Преобразуем данные из API в структуру интерфейса IPost
                const formattedPosts: IPost[] = data.map((product: any) => ({
                    id: product.id,
                    title: product.title,
                    description: product.description,
                    category: 'Uncategorized',
                    author: 'Unknown',
                    date: new Date().toISOString(),
                }));

                setPosts(formattedPosts);
            } catch (err: any) {
                setError(err.message || 'An error occurred');
            } finally {
                setIsLoading(false);
            }
        }

        fetchPosts();
    }, []);

    return { posts, isLoading, error };
}
