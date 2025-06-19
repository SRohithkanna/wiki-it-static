// src/components/SearchResultsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './SearchResultsPage.css';

// SearchResultsPage now accepts query, results, and onClearSearch as props
const SearchResultsPage = ({ query, results, onClearSearch }) => {

    const formatCategoryName = (categorySlug) => {
        if (!categorySlug) return '';
        return categorySlug.split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <div className="search-results-page">
            <h1>Search Results for "{query}"</h1>

            {/* Optional: Button to clear the search and return to home page cards */}
            {query && (
                <button onClick={onClearSearch} className="clear-search-button">
                    Clear Search
                </button>
            )}

            {results.length === 0 && (
                <p>No articles found matching your search for "<strong>{query}</strong>".</p>
            )}

            {results.length > 0 && (
                <div className="results-list">
                    {results.map(article => (
                        <div key={article.slug} className="search-result-item">
                            <h2>
                                {/* Links still navigate to the specific article detail URL */}
                                <Link to={`/category/${article.category}/${article.slug}`}>
                                    {article.title}
                                </Link>
                            </h2>
                            <p className="result-category">
                                Category: <Link to={`/category/${article.category}`}>{formatCategoryName(article.category)}</Link>
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResultsPage;