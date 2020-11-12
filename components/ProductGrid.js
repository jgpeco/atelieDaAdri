import { attributes } from '../content/products.md';
import Product from '../components/Product';

const ProductGrid = ({ searchValue, filter }) => {
  let { product } = attributes;
  const productItem = [];
  let filteredProduct = [];

  product.forEach((item) => {
    productItem.push(item);
  });

  if (filter !== 'all') {
    filteredProduct = productItem.filter((product) =>
      product.type.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    filteredProduct = productItem;
  }

  const searchedProduct = filteredProduct.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  )

  const displayProducts = searchedProduct.reverse()

  return (
    <section className='products container'>
      <div className='product-grid'>
        {displayProducts.length ? (
          displayProducts.map((product, k) => (
            <Product key={k} product={product} />
          ))
        ) : (
          <div>
            <p>Não encontramos produtos com este nome =(</p>
            <p>Favor refazer sua busca</p>
            {filter !== 'all' ? (
              <small>
                <strong>Dica: </strong> tente desativar o filtro aplicado, deste
                modo sua busca englobará todos os produtos
              </small>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
