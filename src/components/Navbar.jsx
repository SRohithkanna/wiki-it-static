// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react'; // Import useEffect and useRef
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

// Navbar now accepts onSearchSubmit for full search and onInstantSearch for instant results
const Navbar = ({ onSearchSubmit, onInstantSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [instantSearchResults, setInstantSearchResults] = useState([]);
    const [showInstantResults, setShowInstantResults] = useState(false);
    const navigate = useNavigate();
    const searchRef = useRef(null); // Ref for detecting clicks outside the search box

    // Effect to handle clicks outside the search results to close them
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowInstantResults(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleInputChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        if (query.trim()) {
            const results = onInstantSearch(query); // Use the new prop for instant search
            setInstantSearchResults(results);
            setShowInstantResults(true); // Show results if query is not empty
        } else {
            setInstantSearchResults([]);
            setShowInstantResults(false); // Hide results if query is empty
        }
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission and page reload

        if (searchQuery.trim()) {
            if (onSearchSubmit) {
                onSearchSubmit(searchQuery); // Trigger full search in App.jsx
            }
            navigate('/'); // Always navigate to home to show full search results
            setShowInstantResults(false); // Hide instant results after full search
            setSearchQuery(''); // Clear the input field after submitting
        } else {
            // If the search input is empty, clear any active search results
            if (onSearchSubmit) {
                onSearchSubmit(''); // Pass an empty string to clear the search
            }
            navigate('/'); // Navigate to home if not already there
            setInstantSearchResults([]); // Clear instant results
            setShowInstantResults(false); // Hide instant results
        }
    };

    const handleResultClick = (categoryName, articleSlug) => {
        navigate(`/category/${categoryName}/${articleSlug}`);
        setSearchQuery(''); // Clear search input
        setInstantSearchResults([]); // Clear instant results
        setShowInstantResults(false); // Hide dropdown
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">IT</Link>
            </div>
            <div className="search-container" ref={searchRef}> {/* Wrapper for search bar and dropdown */}
                <form className="search-bar" onSubmit={handleSearchSubmit}>
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={handleInputChange} // Use the new handler for instant search
                        onFocus={() => { // Show results when input is focused if query exists
                            if (searchQuery.trim()) {
                                setShowInstantResults(true);
                            }
                        }}
                    />
                    <button id="Search" type="submit">Search</button>
                </form>

                {showInstantResults && instantSearchResults.length > 0 && (
                    <div className="instant-search-results">
                        {instantSearchResults.slice(0, 5).map(article => ( // Limit to top 5 results
                            <div
                                key={article.id}
                                className="instant-search-item"
                                onClick={() => handleResultClick(article.category.replace(/\s+/g, '-').toLowerCase(), article.slug)}
                            >
                                <h4>{article.title}</h4>
                                <p>{article.description}</p> {/* Or a snippet of content */}
                            </div>
                        ))}
                    </div>
                )}
                {showInstantResults && searchQuery.trim() && instantSearchResults.length === 0 && (
                    <div className="instant-search-results no-results">
                        <p>No results found for "{searchQuery}"</p>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;