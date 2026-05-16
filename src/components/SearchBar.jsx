function SearchBar({ searchQuery, onSearch }) {
  return (
    <div className="search-wrapper">
      <span className="search-icon">🔍</span>
      <input
        className="search-input"
        type="text"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        aria-label="Search projects"
      />
      {searchQuery && (
        <button
          className="search-clear"
          onClick={() => onSearch("")}
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchBar;