import React, { useState } from 'react';
import { Post } from './PostCard';
import { usePosts } from '../../hooks/usePosts';
import './PostList.css';

interface IPost {
    id: number;
    title: string;
    description: string;
    category: string;
    author: string;
    date: string;
}


const categories = ['Все', 'Маркетинг', 'Программирование', 'Котики', 'Фильмы'];

export function PostList() {
    const { posts, isLoading, error } = usePosts();
    const [selectedCategory, setSelectedCategory] = useState<string>('Все');

    const filteredPosts = selectedCategory === 'Все'
        ? posts
        : posts.filter((post: IPost) => post.category === selectedCategory);

    if (isLoading) {
        return <div>Loading posts...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <div className="category-filter">
                <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div className="post-list">
                {filteredPosts.map((post: IPost) => (
                    <Post
                        key={post.id}
                        title={post.title}
                        description={post.description}
                        author={post.author}
                        date={post.date}
                        category={post.category}
                    />
                ))}
            </div>
        </div>
    );
}
