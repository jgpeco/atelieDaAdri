import Head from 'next/head';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Footer from '../components/Footer';

function Index() {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.14.0/css/all.css'
          integrity='sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc'
          crossOrigin='anonymous'
        />
        <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
      </Head>
      <Navbar isCatalog={false} />
      <Home />
      <Footer />
    </>
  );
}

export default Index;
