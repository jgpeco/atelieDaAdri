import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import SingleProduct from '../../components/SingleProduct';

const produto = () => {
  const router = useRouter();

  //getting id from url
  const url = router.query;
  const id = parseInt(url.produto, 10);

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
