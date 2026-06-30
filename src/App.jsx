
import { BrowserRouter, Routes, Route } from "react-router-dom";

import  Navbar  from './Components/Navbar/Navbar'
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Shop from "./Pages/Shop";
import Footer from "./Footer/Footer";
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from './assets/kids_banner.jpg'


export const App = () => {
  return (
<div>
  <BrowserRouter>
   <Navbar/>
   <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path="/womens" element={<ShopCategory banner={women_banner} category="women"/>}/>
      <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>}/>

      <Route path="/product" element={<Product/>}/>
      <Route path="/product/:productId" element={<Product/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/login" element={<LoginSignup/>}/>
   </Routes>
   <Footer/>
 </BrowserRouter>


</div>
  )
}

export default App
