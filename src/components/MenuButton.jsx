import { useAppContext } from '../context/appContext';

const MenuButton = () => {
  const { toggleMenu } = useAppContext();

  return (
    <div className="menu-btn" onClick={toggleMenu}>
      <i className="fas fa-bars fa-2x"></i>
    </div>
  );
};

export default MenuButton;
