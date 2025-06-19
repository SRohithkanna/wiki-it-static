// src/components/CategoryDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom'; // No need for useLocation if not using state
import './CategoryDetailPage.css';
import articlesData from '../data/articlesData'; // Import your article data

const CategoryDetailPage = () => {
    const { categoryName } = useParams(); // Get the URL parameter

    // Filter articles from your data based on the current categoryName
    const articlesForCategory = articlesData.filter(
        (article) => article.category === categoryName
    );

    // Format the category name for display
    const formattedCategoryName = categoryName
        ? categoryName.split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')
        : 'Unknown Category';

    return (
        <div className="category-detail-page">
            <h1>{formattedCategoryName} Category Articles</h1>
            <p>Here are some common articles related to {formattedCategoryName}:</p>
            <ul>
                {articlesForCategory.length > 0 ? (
                    articlesForCategory.map((article) => (
                        <li key={article.slug}> {/* Use a unique key for list items */}
                            <Link to={`/category/${categoryName}/${article.slug}`}>
                                {article.title}
                            </Link>
                        </li>
                    ))
                ) : (
                    <li>No articles found for this category.</li>
                )}
            </ul>
        </div>
    );
};

export default CategoryDetailPage;