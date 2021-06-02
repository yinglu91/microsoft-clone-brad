import Layout from '../layout/Layout';
import Showcase from './Showcase';
import HomeCards1 from './HomeCards1';
import Xbox from './Xbox';
import HomeCards2 from './HomeCards2';
import Carbon from './Carbon';
import Follow from './Follow';

const Home = () => {
  return (
    <Layout>
      <Showcase />
      <HomeCards1 />
      <Xbox />
      <HomeCards2 />
      <Carbon />
      <Follow />
    </Layout>
  );
};

export default Home;
