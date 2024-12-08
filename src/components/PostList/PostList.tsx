// PostList.tsx
import React, { useState, useEffect } from 'react';
import { Post } from '../Post/Post';
import './PostList.css';

type PostType = {
    id: number;
    title: string;
    description: string;
    category: string;
    author: string;
    date: string;
};

type PostListProps = {
    posts: PostType[];
};

const categories = ['Все', 'Маркетинг', 'Программирование', 'Котики', 'Фильмы'];

export function PostList({ posts }: PostListProps) {
    const [selectedCategory, setSelectedCategory] = useState('Все');
    const [filteredPosts, setFilteredPosts] = useState(posts);

    useEffect(() => {
        if (selectedCategory === 'Все') {
            setFilteredPosts(posts);
        } else {
            setFilteredPosts(posts.filter((post) => post.category === selectedCategory));
        }
    }, [selectedCategory, posts]);

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
                {filteredPosts.map((post) => (
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
