import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen relative">
        <Navbar />
        <main>
          <Hero />
          <Menu />
          <Reviews />
          <Gallery />
          <Location />
        </main>
        <Footer />

        {/* Overlay drawers */}
        <Cart />
        <Checkout />
      </div>
    </CartProvider>
  );
}
