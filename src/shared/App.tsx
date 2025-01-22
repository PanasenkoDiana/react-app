import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../shared/Layout/Layout';
import { PostList } from '../shared/PostList/PostList';
import { PostPage } from '../pages/PostPage/PostPage';
import { Main } from '../shared/Main/Main';

interface IPost {
    id: number;
    title: string;
    description: string;
    category: string;
    author: string;
    date: string;
}

export function App() {
    const posts: IPost[] = [
        { 
            id: 1, 
            title: 'Маркетинг для начинающих', 
            description: 'Как начать свой бизнес и не потерять деньги...', 
            category: 'Маркетинг', 
            author: 'Иван Иванов', 
            date: '10.12.2024',
        },
    ];

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route
                        path="posts"
                        element={
                            posts.length > 0 ? (
                                <PostList/>
                            ) : (
                                <div>Нет доступных постов</div>
                            )
                        }
                    />
                    <Route
                        path="post/:id"
                        element={<PostPage />}
                    />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}
