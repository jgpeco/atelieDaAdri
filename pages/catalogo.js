import React from 'react';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';

const catalogo = () => {
  return (
    <>
      <Navbar />
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
        </section>
        <ProductGrid />
      </div>
    </>
  );
};

export default catalogo;
