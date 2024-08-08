import { Footer, NavBar } from './components';
import { AppRouter } from './router/AppRouter';
import './App.css';


export const App = () => {
  return (
    <>
      <NavBar />
      <AppRouter />
      <Footer />
    </>
  );
};
