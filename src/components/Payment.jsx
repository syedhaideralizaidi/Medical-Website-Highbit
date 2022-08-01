import React from "react";
import styled from "styled-components";
import outline from "../assets/outline.svg";
import visa from "../assets/visa.svg";
import mastercard from "../assets/mastercard.svg";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Product_Cart from "./Product_Cart";
import { useGlobalContext } from "../context/context";
import Footer from "../components/Footer.jsx";
import CheckoutNav from "./CheckoutNav";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import App from "./App/App";

const Payment = (props) => {
 // const res=location.state.response;
  const [PublishableKey,setPublishableKey]= useState();
  let res={}
    

  const location = useLocation();

  const { cart,total } = useGlobalContext();
  const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ navigate programmatically
    
    navigate('/Shipping');
  }

  const handleClickbtn = () => {
    

    var name1=location.state.name;
    var address1=location.state.address;
    var address21=location.state.address2;
    var zipcode1=location.state.zipcode;
    var city1=location.state.city;
    var state1=location.state.state;
    var phone1=location.state.phone;
    var email1=location.state.email;

    res=location.state.responses;
    //console.log("Res",res);
    //console.log(res["Message"]);
    var thenum = res["Message"].replace( /^\D+/g, '');
    console.log("thenum",thenum);
    //navigate('/Thankyou',{state:{id:1,name:name1,address:address1,address2:address21,zipcode:zipcode1,city:city1,state:state1,phone:phone1,email:email1}});

  }
  
  return (
    
    <Wrapper>
      <Navbar />
      <CheckoutNav />
      
<div className="row container testing">
 

      {/* <StripeCheckout 
            stripeKey="pk_test_51LOAgCLocYDVe0iYLVV1VLadghurJPIunOlYlLuQfHr2kYSiWwAqj8nIbBd4rmKoJQ5DRQyquix1Q1BrssP6xRGP00XqsUlfCk"
            token={handleToken}
            amount={total*100}
            name="Payment"
            description="i-sticks Evaluation and Therapy Kit"
            /> */}

            
      {/* <section  className='col-md-8 new' > 
        <div class="">
          <div class="">

            

           <div class="">
              <div class="row yourcart">
                <div class="col">
                  <img
                    src={outline}
                    class="arrowHide"
                    alt=""
                    style={{ position: "relative", left: "-25px" }}
                    onClick={handleClick}
                  />
                  Payment details
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <hr />
                </div>
              </div>
              
              <div class="col">
                <div class="d-flex">
                  <div class="" style={{ width: "" ,padding:"0px 10px 0px 0px"}}>
                    <button class="credit">Credit card</button>
                  </div>
                  <div
                    class="paypal-m"
                    style={{ paddingTop: "10px", width: "16.66667%" }}
                  >
                    <span>PayPal</span>
                  </div>
                </div>
              </div>


              <div class="d-flex card-icon">
                <div style={{ width: "12%" }}>
                  <img src={visa} alt="" />
                </div>
                <div>
                  <img src={mastercard} alt="" class="mastercard" />
                </div>
              </div>

              <section class="payment">
                <form action="/action_page.php">
                  <div class="col">
                    <div class="row">
                      <div class="col-lg-4">
                        <label for="fname" class="label-align">
                          Name on card :
                        </label>
                      </div>

                      <div class="col-lg-6">
                        <input
                          type="text"
                          id="fname"
                          name="fname"
                          placeholder="Full name"
                          data-stripe="name"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-4">
                        <label for="lname" class="label-align">
                          Card number :
                        </label>
                      </div>

                      <div class="col-lg-6">
                        <input
                          type="text"
                          id="Address"
                          name="Address"
                          placeholder="16 digit card number"
                          data-stripe="number"
                        />
                      </div>
                    </div>
                    <div class="d-flex">
                      <div style={{ width: "34.5%" }}>
                        <label for="lname" class="label-align">
                          Expiry :
                        </label>
                      </div>

                      <div style={{ width: "25%" }}>
                        <input
                          type="text"
                          id="Address"
                          name="Address"
                          placeholder="mm/yy"
                          data-stripe="exp-month / exp-year"
                        />
                      </div>
                    </div>
                    <div class="d-flex ">
                      <div style={{ width: "34.5%" }}>
                        <label for="lname" class="label-align">
                          CVV :
                        </label>
                      </div>
                      <div style={{ width: "25%" }}>
                        <input type="text" id="zip-code" name="zip-code" data-stripe="cvc"/>
                      </div>
                    </div>
                  </div>
                </form>
              </section>

              <div class="alignment-order">
                <div class="col continue1">
                  <button onClick={handleClickbtn}>
                    <a
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Continue
                    </a>
                  </button>
                  
                </div>
              </div>
              <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

            </div>


          </div>
        </div>
      </section> */}

      <section  className='col-md-8 new' > 
        <div class="">
          <div class="">

            

           <div class="">
              <div class="row yourcart">
                <div class="col">
                  <img
                    src={outline}
                    class="arrowHide"
                    alt=""
                    style={{ position: "relative", left: "-25px" }}
                    onClick={handleClick}
                  />
                  Payment details
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <hr />
                </div>
              </div>
              
              <div class="col">
                <div class="d-flex">
                  <div class="" style={{ width: "" ,padding:"0px 10px 0px 0px"}}>
                    <button class="credit">Credit card</button>
                  </div>
                  <div
                    class="paypal-m"
                    style={{ paddingTop: "10px", width: "16.66667%" }}
                  >
                    <span>PayPal</span>
                  </div>
                </div>
              </div>


              <div class="d-flex card-icon">
                <div style={{ width: "12%" }}>
                  <img src={visa} alt="" />
                </div>
                <div>
                  <img src={mastercard} alt="" class="mastercard" />
                </div>
              </div>

              <App /*data={res}*/ />

            </div>


          </div>
        </div>
      </section>



      
      <div class="col col-md-4 padding-0">
        <Product_Cart onClick={handleClickbtn} />
      </div>
     
    
</div>
<br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  
  .padding-0{
    padding-right:0;
    padding-left:0;
}
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .cart .container-fluid {
      width: 85%;
    }
  
    .yourcart {
      padding-top: 20px;
    }
    .alignment-order {
      padding-bottom: 10px;
    }
    .paypal-m {
      padding-left: 130px;
    }
    .credit {
      width: 220%;
    }
    .mastercard {
      padding-left: 30px;
    }
  }
  .yourcart {
    padding-top: 68px;
    font-size: var(--font-size-24px);
    font-weight: var(--font-weight-500);
    line-height: 28px;
  }
  input[type="text"] {
    width: 100%;
    padding: 10px 20px;
    margin: 8px 0;
    display: inline-block;
    /* border: 1px solid #ccc; */
    border: none;
    box-sizing: border-box;
    background: #f3f3f3;
  }
  .label-align {
    padding-top: 22px;
    font-family: Work Sans;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
  }
  .shipping .payment input {
    font-family: Work Sans;
    font-size: 16px;
    font-weight: 300;
    line-height: 19px;
  }
  .payment input {
    font-family: Work Sans;
    font-size: 16px;
    font-weight: 300;
    line-height: 19px;
  }
  .payment {
    font-family: Work Sans;
    font-size: 12px;
    font-weight: 300;
    line-height: 14px;
  }
  .credit {
    background-color: #22669c;
    border: none;
    padding: 10px 20px;
    color: white;
  }
  hr {
    margin-top: 1rem;
    margin-bottom: 0rem;
  }
  .card-icon {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .continue1 {
    padding-top: 0px;
  }
  .continue1 button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    border-radius: 8px;
    border: none;
    padding: 10px 0px;
    color: white;
    width: 30%;
  }
  .continue button {
    background-color: #22669c;
    /* box-shadow: 0px 8px 16px rgba(30, 30, 30, 0.3); */
    border-radius: 8px;
    border: none;
    padding: 10px 0px;
    color: white;
    width: 100%;
    cursor:pointer;
    
  }
.testing{
  
  margin-left:120px;
  margin-right:120px;
  align-items:row;
  padding-left:110px;
  padding-right:160px;
}
`;

export default Payment;