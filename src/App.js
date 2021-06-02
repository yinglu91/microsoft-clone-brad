import Navbar from './components/layout/Navbar';
import Showcase from './components/home/Showcase';
import HomeCards1 from './components/home/HomeCards1';
import Xbox from './components/home/Xbox';
import HomeCards2 from './components/home/HomeCards2';
import Carbon from './components/home/Carbon';
import Follow from './components/home/Follow';
import Links from './components/home/Links';
import Footer from './components/layout/Footer';

import MenuButton from './components/MenuButton';

import AppProvider from './context/appContext';

function App() {
  return (
    <AppProvider>
      <MenuButton />

      <div className="container">
        <Navbar />

        <Showcase />
        <HomeCards1 />
        <Xbox />
        <HomeCards2 />
        <Carbon />
        <Follow />
      </div>

      <Links />
      <Footer />
    </AppProvider>
  );
}

export default App;
