import React, { useState } from 'react';

function Post(props: { title: string; description: string; imageUrl: string; author: string }) {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const likeClicked = () => {
        setLikes(likes + 1);
        setLiked(true);
    };

    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
            <img src={props.imageUrl} alt={props.title} />
            <h2>Автор: {props.author}</h2>
            <p>Лайки: {likes}</p>
            <button onClick={likeClicked} disabled={liked}>
                {liked ? 'Лайк поставлен' : 'Лайк'}
            </button>
            <hr />
        </div>
    );
}

export { Post };
