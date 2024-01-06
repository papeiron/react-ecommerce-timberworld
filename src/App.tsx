import { Route, Routes } from 'react-router-dom';
import './assets/css/App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import ProductPage from './pages/ProductPage';
import { useAppSelector } from './redux/hooks';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './layouts/AppLayout';
import ProtectedRoute from './components/ProtectedRoute';
import Checkout from './pages/Checkout';
import { Toaster } from 'react-hot-toast';

function App() {
  const cartIsOpen = useAppSelector((state) => state.cart.isOpen);

  return (
    <div className={`${cartIsOpen ? 'body-overlay' : null}`}>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/shop/:id' element={<ProductPage />} />
          <Route path='*' element={<PageNotFound />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/checkout' element={<Checkout />} />
          </Route>
        </Route>
      </Routes>

      <div className={`${cartIsOpen ? 'darkening' : null}`}></div>
      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000
          },
          error: {
            duration: 5000
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'white',
            color: 'var(--color-grey-700)'
          }
        }}
      />
    </div>
  );
}

export default App;
