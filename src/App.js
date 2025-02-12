import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './pages/Shop'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Kids from './pages/Kids'
import Login from './pages/LoginSignup'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Header from './components/Header'
import Footer from './components/Footer'
import Offer from './pages/Offer';
import Protect from './Protect';




function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Shop />}         />
          <Route path="offer" element={<Offer/>}/>
          <Route path="mens" element={<Mens />}      />
          <Route path="womens" element={<Womens/>}   />
          <Route path="kids" element={<Kids />}      />
          <Route path="login" element={<Login/>}     />
          <Route path="cart" element={<Cart/>}       />
          <Route path="product" element={<Protect><Product/></Protect>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;

