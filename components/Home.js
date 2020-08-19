import Link from 'next/link';

const Home = () => {
  return (
    <div className='content'>
      <section className='hero'>
        <div className='hero-content'>
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
                src='https://res.cloudinary.com/dxs3wvxxw/image/upload/v1597857434/atelieDaAdri/card1.jpg'
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
                src='https://res.cloudinary.com/dxs3wvxxw/image/upload/v1597857434/atelieDaAdri/card2.jpg'
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
                src='https://res.cloudinary.com/dxs3wvxxw/image/upload/v1597857434/atelieDaAdri/card3.jpg'
                alt=''
              />
            </a>
          </Link>
        </div>
      </section>

      <section id='info'>
        <div className='info-content container'>
          <div className='info-header'>
            <h2>Encomendas</h2>
            <p>Para encomendar sua peça, conferir nossa disponibilidade.</p>
          </div>

          <div className='contact'>
            <div className='contact-info'>
              <i className='fab fa-whatsapp'></i> <p>42 99149-6389</p>
            </div>

            <Link href='#'>
              <a className='contact-info'>
                <i className='fab fa-facebook'></i>
                <p>Página do Facebook</p>
              </a>
            </Link>

            <Link href='https://www.instagram.com/ateliadri/'>
              <a className='contact-info'>
                <i className='fab fa-instagram'></i>
                <p>Página do Instagram</p>
              </a>
            </Link>
          </div>
          <div className='info-footer'>
            <p>* Frete a combinar.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
