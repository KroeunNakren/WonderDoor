import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import SlideShow from './components/SlideShow';
import Services from './components/Services';
import Collection from './components/Collection';
import WhyChooseUs from './components/WhyChooseUs';
import ChooseDoorYouLike from './components/ChooseDoorYouLike';
import ElegantInteriorDoors from './components/ElegantInteriorDoors';
import Projects from './components/Projects';
import Partner from './components/Partner';
import Contact from './components/Contact';
import Installer from './components/Installer';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts'; // Import the new component
import AllProductsPage from './pages/AllProductsPage';
import ProductDetail from './components/ProductDetail';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductsPromotion from './components/ProductsPromotion';
import ProductsPromotionPage from './pages/ProductsPromotionPage';
import About from './components/About';
import DownloadApp from './components/DownloadApp';
import ShowRoom from './components/ShowRoom';
import ShowRoomPage from './pages/ShowRoomPage';
import PartnerPage from './pages/PartnerPage';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        
        <Routes>
          {/* Main Home Page Route */}
          <Route path="/" element={
            <>
              <SlideShow />
              <Services />
              <DownloadApp></DownloadApp>
              <Collection />
              <WhyChooseUs />
              <ChooseDoorYouLike />
              <ElegantInteriorDoors />
              
              <Installer />
              <Projects />
              <Partner />
              <Contact />
            </>
          } />

          {/* All Products Page Route */}
          <Route path="/all-products" element={<AllProductsPage/>} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/products-promotion" element={<ProductsPromotionPage></ProductsPromotionPage>} />
          <Route path="/about-us" element={<About></About>} />
          <Route path="/our-showroom" element={<ShowRoomPage></ShowRoomPage>} />
          <Route path="/customers" element={<PartnerPage></PartnerPage>} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
