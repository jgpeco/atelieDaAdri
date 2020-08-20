import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import Search from '../components/Search';

const catalogo = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Navbar isCatalog={true} />
      <div className='content'>
        <section className='filter container'>
          <ul aria-label='Filtrar por:'>
            <li>
              <a href='#'>Todos os Produtos</a>
            </li>
            <li>
              <a href='#'>Cestos</a>
            </li>
            <li>
              <a href='#'>Bolsas</a>
            </li>
            <li>
              <a href='#'>Lorem</a>
            </li>
            <li>
              <a href='#'>Ipsum</a>
            </li>
          </ul>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </section>
        <ProductGrid searchValue={searchValue} />
      </div>
    </>
  );
};

export default catalogo;
