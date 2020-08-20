import { attributes } from '../content/products.md';
import Product from '../components/Product';

const ProductGrid = ({ searchValue }) => {
  let { product } = attributes;
  const productItem = [];

  product.forEach((item) => {
    productItem.push(item);
  });

  const searchedProduct = productItem.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  if (!searchedProduct.length) {
    console.log('sem items');
  }

  return (
    <section className='products container'>
      <div className='product-grid'>
        {searchedProduct.map((product, k) => (
          <Product key={k} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
