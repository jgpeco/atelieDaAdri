import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import Head from 'next/head';
import SingleProduct from '../../components/SingleProduct';

const produto = () => {
  const router = useRouter();
  const url = router.query;
  const id = parseInt(url.produto, 10);

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
      </Head>
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
