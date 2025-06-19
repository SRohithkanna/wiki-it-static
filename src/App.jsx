// src/App.jsx
import React, { useState, useEffect, useCallback } from 'react'; // Import useCallback
import './App.css';
import Card from './components/card';
import CategoryDetailPage from './components/CategoryDetailPage';
import Navbar from './components/Navbar';
import ArticleDetailPage from './components/ArticleDetailPage';
import SearchResultsPage from './components/SearchResultsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Removed useNavigate as it's not directly used here
import Footer from './components/Footer';
import articlesData from './data/articlesData';

function App() {
    const [currentSearchQuery, setCurrentSearchQuery] = useState('');
    const [filteredSearchResults, setFilteredSearchResults] = useState([]);

    // New: Encapsulate search logic into a memoized function
    const performSearch = useCallback((query) => {
        if (!query || !query.trim()) {
            return []; // Return empty array if query is empty
        }

        const lowerCaseQuery = query.toLowerCase().trim();
        const keywords = lowerCaseQuery.split(/\s+/).filter(Boolean);

        const scoredResults = [];

        articlesData.forEach(article => {
            let score = 0;
            const lowerCaseTitle = article.title.toLowerCase();
            const lowerCaseContent = article.content.toLowerCase();

            if (lowerCaseTitle.includes(lowerCaseQuery)) {
                score += 100;
            } else if (lowerCaseContent.includes(lowerCaseQuery)) {
                score += 50;
            }

            keywords.forEach(keyword => {
                if (lowerCaseTitle.includes(keyword)) {
                    score += 10;
                }
                if (lowerCaseContent.includes(keyword)) {
                    score += 3;
                }
            });

            if (score > 0) {
                scoredResults.push({ ...article, score: score });
            }
        });

        scoredResults.sort((a, b) => {
            if (b.score !== a.score) {
                return b.score - a.score;
            }
            return a.title.localeCompare(b.title);
        });

        return scoredResults; // Return the results
    }, []); // No dependencies, as articlesData is static

    // This useEffect now only sets the filteredSearchResults for the dedicated SearchResultsPage
    useEffect(() => {
        setFilteredSearchResults(performSearch(currentSearchQuery));
    }, [currentSearchQuery, performSearch]); // Depend on currentSearchQuery and performSearch

    const handleSearchSubmit = (query) => {
        setCurrentSearchQuery(query);
    };

    return (
        <Router>
            {/* Pass the new performSearch function to Navbar */}
            <Navbar onSearchSubmit={handleSearchSubmit} onInstantSearch={performSearch} />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            {currentSearchQuery ? (
                                <SearchResultsPage
                                    query={currentSearchQuery}
                                    results={filteredSearchResults}
                                    onClearSearch={() => setCurrentSearchQuery('')}
                                />
                            ) : (
                                <>
                                    <h1 id='head'>IT Department Knowledge Base</h1>
                                    <div id='cardblock'>
                                        <Card header="Account Management" name1="Password Reset" name2="Account Lockout" name3="Access Requests"/>
                                        <Card header="Hardware" name1="Computer Setup" name2="Printer Troubleshooting" name3="Hardware Inventory"/>
                                        <Card header="Software" name1="VPN Installation" name2="Office 365 Setup" name3="Software Updates"/>
                                        <Card header="Network and Security" name1="Wi-Fi Troubleshooting" name2="Network Configuration" name3="Firewall Settings"/>
                                    </div>
                                    <Footer />
                                </>
                            )}
                        </>
                    }
                />

                <Route path="/category/:categoryName" element={<CategoryDetailPage />} />
                <Route path="/category/:categoryName/:articleSlug" element={<ArticleDetailPage />} />
            </Routes>
        </Router>
    );
}

export default App;