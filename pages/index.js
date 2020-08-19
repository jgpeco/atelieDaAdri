import Head from 'next/head';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Footer from '../components/Footer';

function Index() {
  return (
    <>
      <Head>
        <link
          rel='stylesheet'
          href='https://use.fontawesome.com/releases/v5.14.0/css/all.css'
          integrity='sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc'
          crossOrigin='anonymous'
        />
        <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
      </Head>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default Index;

{
  /* <article>
          <ul>
            {product.map((product, k) => (
              <li key={k}>
                <h2>{product.name}</h2>
                <p>Ref {product.ref}</p>
                <p>{product.size}</p>
                <p>{product.price}</p>
                <img src={product.url1} alt='' style={{ width: '200px' }} />
              </li>
            ))}
          </ul>
        </article> 

        render() {
          let { product } = attributes;
          console.log(product);

          import { Component } from 'react';
          import { attributes } from '../content/products.md';

    */
}
