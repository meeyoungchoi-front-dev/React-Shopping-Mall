import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductAllPage from './page/ProductAllPage';
import LoginPage from './page/LoginPage';
import ProductDetailPage from './page/ProductDetailPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductAllPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/product/:id" element={<ProductDetailPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
