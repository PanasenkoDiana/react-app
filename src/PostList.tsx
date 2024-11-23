import React from 'react';
import { Post } from './Post';

interface IPost {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    author: string;
}

interface IPostListProps {
    posts: IPost[];
}

function PostList(props: IPostListProps) {
    return (
        <div>
            {props.posts.map((post) => (
                <Post
                    key={post.id}
                    title={post.title}
                    description={post.description}
                    imageUrl={post.imageUrl}
                    author={post.author}
                />
            ))}
        </div>
    );
}

export { PostList };
