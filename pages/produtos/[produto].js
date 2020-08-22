import Head from 'next/head';
import Navbar from '../../components/Navbar';
import SingleProduct from '../../components/SingleProduct';

const produto = () => {
  const url = window.location.href;
  const separator = '/';
  const breakUrl = url.split(separator);
  const idString = breakUrl[breakUrl.length - 1];
  const id = parseInt(idString, 10);

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
      <Navbar isCatalog={true} />
      <div className='content'>
        <section className='container'>
          <SingleProduct id={id} />
        </section>
      </div>
    </>
  );
};

export default produto;
