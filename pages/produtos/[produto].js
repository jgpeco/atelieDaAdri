import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import SingleProduct from '../../components/SingleProduct';

const produto = () => {
  const router = useRouter();
  const url = router.query;
  const id = parseInt(url.produto, 10);

  return (
    <>
      <Navbar isCatalog={true} />
      <div className='content'>
        <section className='container'>
          {id ? <SingleProduct id={id} /> : null}
        </section>
      </div>
    </>
  );
};

export default produto;
