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
