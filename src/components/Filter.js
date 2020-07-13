import React from 'react';

const Filter = ({ query, getQuery }) => {
  const search = (e) => {
    if (e.key === 'Enter') {
      getQuery(e.target.value);
    }
  };
  return (
    <div className="search-box">
      <input
        className="search-bar"
        type="text"
        placeholder="Search..."
        onKeyPress={(e) => search(e)}
      />
    </div>
  );
};

export default Filter;
