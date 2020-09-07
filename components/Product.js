import React from 'react';
import Link from 'next/link';

const Product = ({ product }) => {
  let { name, size, price, ref, url1 } = product;
  return (
    <div className='product'>
      <Link href='/produtos/[produto]' as={`/produtos/${ref}`} passHref>
        <a>
          <img src={url1} alt='Imagem do Produto' />
        </a>
      </Link>

      <div className='product-item'>
        <div className='item-head'>
          <h3 className='item-title'>
            <Link href='/produtos/[produto]' as={`/produtos/${ref}`} passHref>
              <a>{name}</a>
            </Link>
          </h3>
          <small className='item-ref'>Ref. {ref}</small>
        </div>
        <div className='item-body'>
          <p className='item-price'>R${price}</p>
          <p className='item-size'>{size}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
