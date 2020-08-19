import { Component } from 'react';
import { attributes } from '../content/products.md';
import Product from '../components/Product';

export default class ProductGrid extends Component {
  render() {
    let { product } = attributes;

    return (
      <section className='products container'>
        <div className='product-grid'>
          {product.map((product, k) => (
            <Product key={k} product={product} />
          ))}
        </div>
      </section>
    );
  }
}
