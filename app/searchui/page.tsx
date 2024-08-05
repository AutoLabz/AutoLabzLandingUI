"use client";

import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

export default function SearchUI() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    // Implement search logic here
    // call an API to get search results
    // const results = await fetchSearchResults(searchQuery);
    // setSearchResults(results);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-gray-100'>
      <NavBar />
      <header className="w-full bg-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">Search UI</h1>
        </div>
      </header>
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSearch} className="w-full flex items-center justify-center mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for cars..."
            className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        </form>
        <div className="w-full">
          {searchResults.length > 0 ? (
            <ul className="space-y-4">
              {searchResults.map((result, index) => (
                <li key={index} className="p-4 bg-white rounded-md shadow-md">
                  {/* Render your search result item here */}
                  <p>{result.name}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">No results found</p>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}