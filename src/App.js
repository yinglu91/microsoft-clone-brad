import AppProvider from './context/appContext';
import Home from './components/home/Home';

function App() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
