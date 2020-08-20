import Link from 'next/link';
import Info from '../components/Info';

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

      <Info isCatalog={false} />
    </div>
  );
};

export default Home;
