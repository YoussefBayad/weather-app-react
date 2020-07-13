import React from 'react';

const Filter = ({ query, getQuery }) => {
  return (
    <div className="search-box">
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        value={query}
        onSubmit={(e) => getQuery(e.target.value)}
      />
    </div>
  );
};

export default Filter;
