import { Route, Routes, useLocation } from 'react-router-dom';
import './assets/css/App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Navbar from './layouts/Navbar';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import ProductPage from './pages/ProductPage';
import { useAppSelector } from './redux/hooks';
import Footer from './layouts/Footer';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';

function App() {
  let location = useLocation();
  const cartIsOpen = useAppSelector((state) => state.cart.isOpen);

  return (
    <div className={`${cartIsOpen ? 'body-overlay' : null}`}>
      {location.pathname === '/signin' || location.pathname === '/register' ? null : <Navbar />}

      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/shop/:id' element={<ProductPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

      <Footer />
      <div className={`${cartIsOpen ? 'darkening' : null}`}></div>
    </div>
  );
}

export default App;
