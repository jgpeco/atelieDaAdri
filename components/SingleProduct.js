import { useState } from 'react';
import Link from 'next/link';
import { attributes } from '../content/products.md';

const SingleProduct = ({ id }) => {
  //turning attributes into a single array
  let { product } = attributes;
  const productItem = [];
  product.forEach((item) => {
    productItem.push(item);
  });

  //filtering the single product based on its ref
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
    console.log(image);
  }

  return (
    <div class='single-product'>
      <div class='single-product-slider'>
        <div class='slider-thumb'>
          <img src={`${url1}`} onClick={handleChange} />
          {url2 ? <img src={`${url2}`} onClick={handleChange} /> : null}
          {url3 ? <img src={`${url3}`} onClick={handleChange} /> : null}
          {url4 ? <img src={`${url4}`} onClick={handleChange} /> : null}
          {url5 ? <img src={`${url5}`} onClick={handleChange} /> : null}
        </div>
      </div>

      <div class='slider-image'>
        <img id='img-full' src={`${image}`} />
      </div>

      <div class='single-product-body'>
        <div class='item-body'>
          <h3 class='item-title'>{name}</h3>
          <p clas='item-ref'>Ref. {ref}</p>
          <p class='item-type'>
            <span class='item-field'>Categoria:</span>
            {type}
          </p>
          <p class='item-price'>
            <span class='item-field'>Preço:</span> R${price}
          </p>
          <p class='item-size'>
            <span class='item-field'>Tamanho:</span> {size}
          </p>
        </div>
        <div class='item-order'>
          <p class='interest'>Ficou interessado? </p>
          <p class='interest-info'>
            Para realizar a compra, entre em contato conosco, passando o nome ou
            o número de referência deste produto.
          </p>
          <ul>
            <li>
              <Link href='https://wa.me/5542991496389'>
                <a target='_blank' rel='noopener'>
                  <i class='fab fa-whatsapp'></i> 42 99149-6389
                </a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a target='_blank' rel='noopener'>
                  <i class='fab fa-facebook'></i> Facebook
                </a>
              </Link>
            </li>
            <li>
              <Link href='https://www.instagram.com/ateliadri/'>
                <a target='_blank' rel='noopener'>
                  <i class='fab fa-instagram'></i> Instagram
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div class='back'>
          <Link href='/catalogo'>
            <a class='btn'>Voltar para Catálogo</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
