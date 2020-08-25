import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { attributes } from '../content/products.md';

const SingleProduct = ({ id }) => {
  //turning attributes into a single array
  let { product } = attributes;
  const productItem = [];
  product.forEach((item) => {
    productItem.push(item);
  });

  // filtering the single product based on its ref
  const singleProduct = productItem.filter((product) => product.ref === id);

  const {
    name,
    type,
    price,
    size,
    ref,
    url1,
    url2,
    url3,
    url4,
    url5,
  } = singleProduct[0];

  //img slider
  const [image, setImage] = useState(url1);

  function handleChange(e) {
    setImage(event.target.getAttribute('src'));
  }

  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.14.0/css/all.css'
          integrity='sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc'
          crossOrigin='anonymous'
        />
      </Head>
      <div className='single-product'>
        <div className='single-product-slider'>
          <div className='slider-thumb'>
            <img src={`${url1}`} onClick={handleChange} />
            {url2 ? <img src={`${url2}`} onClick={handleChange} /> : null}
            {url3 ? <img src={`${url3}`} onClick={handleChange} /> : null}
            {url4 ? <img src={`${url4}`} onClick={handleChange} /> : null}
            {url5 ? <img src={`${url5}`} onClick={handleChange} /> : null}
          </div>
        </div>

        <div className='slider-image'>
          <img id='img-full' src={`${image}`} />
        </div>

        <div className='single-product-body'>
          <div className='item-body'>
            <h3 className='item-title'>{name}</h3>
            <p className='item-ref'>Ref. {ref}</p>
            <p className='item-type'>
              <span className='item-field'>Categoria: </span>
              {type}
            </p>
            <p className='item-price'>
              <span className='item-field'>Preço:</span> R${price}
            </p>
            <p className='item-size'>
              <span className='item-field'>Tamanho:</span> {size}
            </p>
          </div>
          <div className='item-order'>
            <p className='interest'>Ficou interessado? </p>
            <p className='interest-info'>
              Para realizar a compra, entre em contato conosco, passando o nome
              ou o número de referência deste produto.
            </p>
            <ul>
              <li>
                <Link href='https://wa.me/5542991496389'>
                  <a target='_blank' rel='noopener'>
                    <i className='fab fa-whatsapp'></i> 42 99149-6389
                  </a>
                </Link>
              </li>
              <li>
                <Link href='https://www.facebook.com/ateliadri'>
                  <a target='_blank' rel='noopener'>
                    <i className='fab fa-facebook'></i> Facebook
                  </a>
                </Link>
              </li>
              <li>
                <Link href='https://www.instagram.com/ateliadri/'>
                  <a target='_blank' rel='noopener'>
                    <i className='fab fa-instagram'></i> Instagram
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className='back'>
            <Link href='/catalogo'>
              <a className='btn'>Voltar para Catálogo</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
