import React from 'react';

const Search = ({ searchValue, setSearchValue }) => {
  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div className='search-box'>
      <input
        type='text'
        placeholder='Procure por um produto...'
        value={searchValue}
        onChange={handleChange}
      />
      {/* <pre>{searchValue}</pre> */}
    </div>
  );
};

export default Search;
