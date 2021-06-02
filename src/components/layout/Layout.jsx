import Navbar from './Navbar';
import Links from '../home/Links';
import Footer from './Footer';

import MenuButton from '../MenuButton';

const Layout = (props) => {
  return (
    <>
      <MenuButton />

      <div className="container">
        <Navbar />

        {props.children}
      </div>

      <Links />
      <Footer />
    </>
  );
};

export default Layout;
