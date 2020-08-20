import Link from 'next/link';
import Head from 'next/head';

const Info = ({ isCatalog }) => {
  let info;

  if (isCatalog) {
    info = 'info-page';
  } else {
    info = 'info';
  }
  console.log(isCatalog);
  console.log(info);

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
      <div className='content'>
        <section id={info}>
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
    </>
  );
};

export default Info;
