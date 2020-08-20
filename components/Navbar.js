import React from 'react';
import Link from 'next/link';

const Navbar = ({ isCatalog }) => {
  return (
    <nav className='nav-sm'>
      <div className='navbar container'>
        <div className='navbar-logo'>
          <Link href='/'>
            <a>
              <img
                className='img-logo'
                src='https://res.cloudinary.com/dxs3wvxxw/image/upload/v1597857434/atelieDaAdri/logo.png'
                alt='logo-ateliê'
              />
            </a>
          </Link>
        </div>
        <div className='navbar-items'>
          <li>
            <Link href='/catalogo'>
              <a>Catálogo</a>
            </Link>
          </li>
          <li>
            {isCatalog ? (
              <Link href='/encomendas'>
                <a>Encomendas</a>
              </Link>
            ) : (
              <Link href='#info'>
                <a>Encomendas</a>
              </Link>
            )}
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
