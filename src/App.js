import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ProductAllPage from './page/ProductAllPage';
import LoginPage from './page/LoginPage';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute.';

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log("AAA", authenticate);
  }, [authenticate]) 

  return (
    <div>
      <Navbar isLoggedIn={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAllPage />}></Route>
        <Route path="/login" element={<LoginPage setAuthenticate={setAuthenticate}/> }></Route>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
