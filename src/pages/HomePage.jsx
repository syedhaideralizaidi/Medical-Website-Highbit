import React from "react";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Sticks from "../components/Sticks.jsx";
import Olfactory from "../components/Olfactory.jsx";
import Olfaction from "../components/Olfaction.jsx";
import Tutorials from "../components/Tutorials.jsx";
import Shop from "../components/Shop.jsx";
import Cart from "../components/Cart.jsx";
import Footer from "../components/Footer.jsx";
import { useGlobalContext } from "../context/context";

function HomePage() {
  const { cart,cartItems } = useGlobalContext();

  return (
    
    <>
      <Navbar />
      <Hero />
      <Sticks />
      <Olfactory />
      <Olfaction />
      <Tutorials />
      <Shop />
      {/* {cart.map((item) => {
        return <Cart key={item.id} {...item} />;
      })} */}

    {cart && cart.filter((item)=>item.id===2 || item.id===1).map((item)=>{return <Cart key={item.id} {...item} />})}
      <Footer />
    </>
  );
}

export default HomePage;