import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import FilterForm from '../components/FilterForm';
import Search from '../components/Search';

const catalogo = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filter, setFilter] = useState('all');

  return (
    <>
      <Navbar isCatalog={true} />
      <div className='content'>
        <section className='filter container'>
          <FilterForm filter={filter} setFilter={setFilter} />
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </section>
        <ProductGrid searchValue={searchValue} filter={filter} />
      </div>
    </>
  );
};

export default catalogo;
