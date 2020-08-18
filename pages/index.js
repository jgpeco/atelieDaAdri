import Head from 'next/head';
import { Component } from 'react';
import { attributes } from '../content/products.md';

export default class Home extends Component {
  render() {
    let { products } = attributes;
    console.log(products);
    return (
      <>
        <Head>
          <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
        </Head>
        <article>
          <ul>
            {products.map((product, k) => (
              <li key={k}>
                <h2>{product.name}</h2>
                <p>Ref {product.ref}</p>
                <p>{product.size}</p>
                <p>{product.price}</p>
              </li>
            ))}
          </ul>
        </article>
        <div>hello</div>
      </>
    );
  }
}
