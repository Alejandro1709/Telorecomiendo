import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout
      title='hotelsnow.com | Home'
      description='Welcome to hotelsnow.com! In this website you will be able to rent a room in any of our available hotels around the world'
    >
      <h1>Hello</h1>
    </Layout>
  );
};

export default Home;
