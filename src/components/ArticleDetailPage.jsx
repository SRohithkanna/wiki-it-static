// src/components/ArticleDetailPage.jsx
import React, { useEffect } from 'react'; // Import useEffect for the console log
import { useParams, Link, useNavigate } from 'react-router-dom';

import articlesData from '../data/articlesData'; // Import your article data
import './ArticleDetailPage.css'; // Ensure this CSS file exists and is linked

const ArticleDetailPage = () => {
    const { categoryName, articleSlug } = useParams(); // Extract params from URL
    const navigate = useNavigate();

    // --- DEBUGGING START ---
    useEffect(() => {
        console.log("--- ArticleDetailPage Debugging ---");
        console.log("Received URL Params:");
        console.log("  categoryName:", categoryName);
        console.log("  articleSlug:", articleSlug);

        // Perform the find operation here again for logging purposes
        const foundArticleCheck = articlesData.find(
            (art) => {
                const isCategoryMatch = art.category === categoryName;
                const isSlugMatch = art.slug === articleSlug;
                // Uncomment the line below for very verbose debugging, showing each article check
                // console.log(`  Checking article: ${art.title || 'N/A'}, Category match: ${isCategoryMatch}, Slug match: ${isSlugMatch}`);
                return isCategoryMatch && isSlugMatch;
            }
        );

        if (foundArticleCheck) {
            console.log("Article SUCCESSFULLY FOUND in articlesData:", foundArticleCheck.title);
        } else {
            console.log("Article NOT FOUND in articlesData for provided params.");
            // This is the critical line if you see it!
            console.log("  Please check if article.category and article.slug in articlesData.js");
            console.log("  EXACTLY match (case-sensitive) the params:", { categoryName, articleSlug });
        }
        console.log("-----------------------------------");
    }, [categoryName, articleSlug]); // Re-run this effect if URL parameters change
    // --- DEBUGGING END ---


    // Helper function to format slugs back into readable text
    const formatSlug = (slug) => {
        if (!slug) return '';
        return slug.split('-')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
    };

    const formattedCategoryName = formatSlug(categoryName);

    // Find the specific article based on URL parameters
    const article = articlesData.find(
        (art) => art.category === categoryName && art.slug === articleSlug
    );

    // If no article is found, display a "not found" message
    if (!article) {
        return (
            <div className="article-detail-page not-found">
                <button onClick={() => navigate(-1)} className="back-button">
                    &larr; Go Back
                </button>
                <h1>Article Not Found</h1>
                <p>Sorry, the article you are looking for does not exist or has been moved.</p>
                <p>Please check the URL or return to the <Link to="/">Home Page</Link>.</p>
            </div>
        );
    }

    // If article is found, display its content
    return (
        <div className="article-detail-page">
            {/* Breadcrumbs for better navigation context */}
            <p className="article-breadcrumb">
                <Link to="/">Home</Link> /{' '}
                <Link to={`/category/${article.category}`}>{formatSlug(article.category)}</Link> /{' '}
                <span>{article.title}</span>
            </p>

            <button onClick={() => navigate(-1)} className="back-button">
                &larr; Back to {formattedCategoryName} Category
            </button>

            <h1>{article.title}</h1>

            {/* Using dangerouslySetInnerHTML to render HTML content */}
            {/* This renders the HTML string directly. Use with caution from untrusted sources. */}
            <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />

            {/* Optional: Footer link to view all articles in the category */}
            <div className="article-footer">
                <Link to={`/category/${article.category}`}>
                    View All {formatSlug(article.category)} Articles
                </Link>
            </div>
        </div>
    );
};

export default ArticleDetailPage;