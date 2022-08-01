import React from "react";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import Axios from "axios";
import Cardsection from "./Cardsection";
import Swal from 'sweetalert2'
import { useGlobalContext } from "../../context/context";

class CheckoutForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };

  }
  handleSubmit = async event => {
    event.preventDefault();
    let value="";
    const { stripe, elements } = this.props;
    if (!stripe || !elements) {
      return;
    }
    console.log("Inside handleSubmit");

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      console.log(result.error.message);
      Swal.fire({
        icon: 'warning',
        title: 'Payment Failed',
        text: "Unable to process your payment!",
        showCancelButton: false,
        confirmButtonText: 'Try Again',
        
    })
    } else {
      console.log("Result Token: ",result.token);
      value=result.token.id;
      console.log("Value: ",value);
      Swal.fire({
        icon: 'success',
        title: 'Payment Added!',
        text: "Order Placed Successfully! Press Continue to Track your Order",
        showConfirmButton: false,
        timer: 2500,
    });
    }
    //const {total}=useGlobalContext();
    const obj={
      "Url": "/do-rapid-pay",
        "CartRequest": {
          "TotelAmount": 50,
          "OrderId": 11,
          "TokenId": "tok_1LQpCXLocYDVe0iYkbQE7woQ"
        }
      }
      // obj["CartRequest"]["TotelAmount"]=total;
       obj["CartRequest"]["TokenId"]=value;

    let api='https://5qrg7as0r4.execute-api.us-east-1.amazonaws.com/isticks/do-rapid-pay';

    Axios.post(api,obj).then(res=>{
      console.log("Response: ",obj);
      console.log(res.data);
    })
  console.log("Value: ",obj);
  };

  render() {
    return (
      <div>      
        <form onSubmit={this.handleSubmit}>
          <Cardsection />
          <div class="alignment-order">
                <div class="col continue1">
                  <button disabled={!this.props.stripe} onClick={this.handleSubmit}>
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Pay Now
                    </a>
                  </button>                  
                </div>
              </div>
        </form>
      </div>
    );
  }
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}