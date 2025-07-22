import { Routes, Route } from 'react-router-dom';
import NavbarMain from './assets/components/navbar/navbar';
import Home from './assets/pages/home/home';
import ProductDetails from './assets/components/productInfo';
import SearchResults from './assets/components/searchResult';
import CategoryProducts from './assets/components/slider/ctgProducts';

function App() {
  return (
    <>
      <NavbarMain /> {/* Always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
      </Routes>
    </>
  );
}

export default App;
