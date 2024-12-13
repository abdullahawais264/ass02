import { useEffect, useState } from 'react';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
        setSearchHistory(history);
      } catch (error) {
        console.error("Error accessing localStorage:", error);
      }
    }
  }, []);

  const handleSearch = () => {
    if (!searchTerm.trim()) return;

    const updatedHistory = [searchTerm, ...searchHistory].slice(0, 5); // Limit to 5 recent searches
    setSearchHistory(updatedHistory);

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
      } catch (error) {
        console.error("Error setting localStorage:", error);
      }
    }

    setSearchTerm('');
  };

  return (
    <div className="container">
      <h1>Search Books</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter book title or author"
      />
      <button onClick={handleSearch}>Search</button>

      <h2>Recent Searches</h2>
      <ul>
        {searchHistory.length > 0 ? (
          searchHistory.map((term, index) => (
            <li key={index}>{term}</li>
          ))
        ) : (
          <li>No recent searches</li>
        )}
      </ul>
    </div>
  );
};

export default SearchPage;
