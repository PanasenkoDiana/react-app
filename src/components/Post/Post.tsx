// Post.tsx
import React, { useState } from 'react';
import './Post.css';

export function Post(props: { title: string; description: string; imageUrl?: string; author: string; date: string; category: string }) {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLikes(likes + 1);
        setLiked(true);
    };

    return (
        <div className="post-container">
            <div className="post-header">
                <img
                    src="https://www.svgrepo.com/show/327151/person-circle-sharp.svg"
                    alt="User Icon"
                    className="post-avatar"
                />
                <div className="post-user-info">
                    <h2 className="post-author">{props.author}</h2>
                    <span className="post-date">{props.date}</span>
                </div>
            </div>

            <h1 className="post-title">{props.title}</h1>
            <p className="post-description">{props.description}</p>

            <div className="post-footer">
                <div className="post-likes">
                    <span>{likes}</span>
                    <button className="like-button" onClick={handleLike} disabled={liked}>
                        <img
                            src={liked ? "https://www.svgrepo.com/show/505913/like.svg" : "https://www.svgrepo.com/show/506227/like.svg"}
                            alt={liked ? "Liked" : "Like"}
                        />
                    </button>
                </div>
                <span className="post-category">{props.category}</span>
            </div>
            <hr className="post-divider" />
        </div>
    );
}
