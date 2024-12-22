import React from 'react';
import { useParams } from 'react-router-dom';
import { usePostById } from '../../hooks/usePostById';
import './PostPage.css';

export function PostPage() {
    const { id } = useParams();
    const { post, isLoading, error } = usePostById(Number(id));

    if (isLoading) {
        return <div>Загрузка поста...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    if (!post) {
        return <div>Пост не найден</div>;
    }

    return (
        <div className="main-container">
            <div className="post-info">
                <h1 className="post-title">{post.title}</h1>
                <p className="post-description">{post.description}</p>
                <p className="post-author"><strong>Автор:</strong> {post.author}</p>
                <p className="post-date"><strong>Дата:</strong> {new Date(post.date).toLocaleDateString()}</p>
                <p className="post-category"><strong>Категория:</strong> {post.category}</p>
            </div>
        </div>
    );
}
