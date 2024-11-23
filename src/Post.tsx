import React from 'react';

interface IPostProps {
    title: string;
    description: string;
    imageUrl: string;
    author: string;
}

function Post(props: { title: string; description: string; imageUrl: string; author: string }) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
            <img src={props.imageUrl} alt={props.title} />
            <h2>Автор: {props.author}</h2>
            <hr />
        </div>
    );
}

export { Post };
