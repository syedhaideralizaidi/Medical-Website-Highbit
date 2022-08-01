import React from "react";
import "./styles.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useGlobalContext } from "../../context/context";
const stripePromise = loadStripe("pk_test_51LOAgCLocYDVe0iYLVV1VLadghurJPIunOlYlLuQfHr2kYSiWwAqj8nIbBd4rmKoJQ5DRQyquix1Q1BrssP6xRGP00XqsUlfCk");

const App = (props) => {
  const {total}=useGlobalContext();
  //let newobj=props.data;
  //console.log("Inside App jsx: ",newobj);
  return (
    
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm /*data={newobj}*/ />
          </Elements>
        </div>
      
  );
};

export default App;