import Navbar from '../../components/Navbar';
import SingleProduct from '../../components/SingleProduct';

const produto = () => {
  return (
    <>
      <Navbar isCatalog={true} />
      <div className='content'>
        <section className='container'>
          <SingleProduct />
        </section>
      </div>
    </>
  );
};

export default produto;
