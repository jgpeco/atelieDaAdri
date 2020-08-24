import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Info from '../components/Info';

const Home = () => {
  const [image, setImage] = useState(
    'https://res.cloudinary.com/dxs3wvxxw/image/upload/v1597857434/atelieDaAdri/img-hero.jpg'
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (
        image ===
        'https://res.cloudinary.com/dxs3wvxxw/image/upload/v1597857434/atelieDaAdri/img-hero.jpg'
      ) {
        setImage(
          'https://res.cloudinary.com/dxs3wvxxw/image/upload/v1598278582/atelieDaAdri/img-hero2.jpg'
        );
      } else {
        setImage(
          'https://res.cloudinary.com/dxs3wvxxw/image/upload/v1597857434/atelieDaAdri/img-hero.jpg'
        );
      }
    }, 4250);

    return () => clearInterval(timer);
  });

  return (
    <div className='content'>
      <section className='hero'>
        <div
          className='hero-content'
          style={{
            backgroundImage: 'url(' + image + ')',
          }}
        >
          <div className='hero-text'>
            <div>
              <h2>Peças de Crochê</h2>
              <p>Com fio de malha</p>
            </div>
            <div>
              <Link href='/catalogo'>
                <a className='btn btn-shop'>Ver Catálogo</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='cards container'>
        <div className='card-item'>
          <Link href='/catalogo'>
            <a>
              <div className='card-item-text'>
                <h3>Diversos tamanhos</h3>
              </div>
              <div className='card-item-pop'>
                <span>Ver Produtos</span>
              </div>
              <img
                src='https://res.cloudinary.com/dxs3wvxxw/image/upload/v1598278809/atelieDaAdri/card1.jpg'
                alt=''
              />
            </a>
          </Link>
        </div>

        <div className='card-item'>
          <Link href='/catalogo'>
            <a>
              <div className='card-item-text'>
                <h3>Cores variadas</h3>
              </div>
              <div className='card-item-pop'>
                <span>Ver Produtos</span>
              </div>
              <img
                src='https://res.cloudinary.com/dxs3wvxxw/image/upload/v1598278808/atelieDaAdri/card2.jpg'
                alt=''
              />
            </a>
          </Link>
        </div>

        <div className='card-item'>
          <Link href='/catalogo'>
            <a>
              <div className='card-item-text'>
                <h3>Modelos para todos</h3>
              </div>
              <div className='card-item-pop'>
                <span>Ver Produtos</span>
              </div>
              <img
                src='https://res.cloudinary.com/dxs3wvxxw/image/upload/v1598278809/atelieDaAdri/card3.jpg'
                alt=''
              />
            </a>
          </Link>
        </div>
      </section>

      <Info isCatalog={false} />
    </div>
  );
};

export default Home;
