import React from 'react';
import { useParams } from 'react-router-dom';
import './PostPage.css';

export function PostPage({ posts }: { posts: any[] }) {
    const { id } = useParams();
    const post = posts.find(p => p.id === parseInt(id!));

    if (!post) return <div>Пост не найден</div>;

    return (
        <div className="main-container">
            <div className="post-info">
                <h1 className="post-title">{post.title}</h1>
                <p className="post-description">{post.description}</p>
                <p className="post-author"><strong>Автор:</strong> {post.author}</p>
                <p className="post-date"><strong>Дата:</strong> {post.date}</p>
                <p className="post-category"><strong>Категория:</strong> {post.category}</p>
            </div>
        </div>
    );
}
