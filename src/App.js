import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutNav from "./components/CheckoutNav.jsx";
import HomePage from "./pages/HomePage.jsx";
import MainCheckOut from "./pages/MainCheckOut.jsx";
import Cart from "./components/Cart.jsx";
import Product_Cart from "./components/Product_Cart.jsx";
import Shipping from "./components/Shipping.jsx";
import Payment from "./components/Payment.jsx";
import Order_Review from "./components/Order_Review.jsx";
import {useGlobalContext} from './context/context';
import Thankyou from "./components/Thankyou.jsx";

function App() {
  const { cart } = useGlobalContext();
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/MainCheckOut" element={<MainCheckOut />}></Route>
      <Route path="/Product_Cart" element={<Product_Cart />}></Route>
      <Route path="/Shipping" element={<Shipping />}></Route>
      <Route path="/Payment" element={<Payment />}></Route>
      <Route path="/Thankyou" element={<Thankyou />}></Route>
      <Route path="/Order_Review" element={<Order_Review />}></Route>
        <Route index element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;