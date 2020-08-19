import React from 'react';

const Product = ({ product }) => {
  let { name, size, price, ref, url1 } = product;
  return (
    <div className='product'>
      <img src={url1} alt='Imagem do Produto' />
      <div className='product-item'>
        <div className='item-head'>
          <h3 className='item-title'>
            <a href='#'>{name}</a>
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
