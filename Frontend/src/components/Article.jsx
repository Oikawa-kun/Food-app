import React, { useEffect, useState } from "react";

const Article = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://dev.to/api/articles?per_page=30");

        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }

        const data = await response.json();

        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setArticles([]);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Article;
