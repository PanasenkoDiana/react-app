import { IPost } from "../../hooks/usePosts"; // Импортируем интерфейс IPost
import { useEffect, useState } from "react";
import { Post } from "./PostCard";
import "./PostList.css";
import { usePosts } from "../../hooks/usePosts";

const categories = ["Все", "Маркетинг", "Программирование", "Котики", "Фильмы"];

export function PostList() {
    const { posts, isLoading, error } = usePosts();
    const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]); // Теперь TypeScript понимает IPost
    const [selectedCategory, setSelectedCategory] = useState("Все");

    // Обновление отфильтрованных постов при изменении категории
    useEffect(() => {
        if (selectedCategory === "Все") {
            setFilteredPosts(posts);
        } else {
            setFilteredPosts(
                posts.filter((post) =>
                    post.category.toLowerCase().includes(selectedCategory.toLowerCase())
                )
            );
        }
    }, [selectedCategory, posts]);

    return (
        <div className="post-list-container">
            <div className="category-filter">
                <select onChange={(event) => setSelectedCategory(event.target.value)}>
                    <option value="Все">Все</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <div className="posts">
                {isLoading ? (
                    <div className="loading">Загрузка постов...</div>
                ) : error ? (
                    <div className="error">Ошибка: {error}</div>
                ) : (
                    filteredPosts.map((post) => (
                        <Post
                            key={post.id}
                            title={post.title}
                            description={post.description}
                            author={post.author}
                            date={post.date}
                            category={post.category}
                        />
                    ))
                )}
            </div>
        </div>
    );
}
