import React from "react";
import styled from "styled-components";
import i_sticks from "../assets/i_sticks.svg";
const Sticks = () => {
  return (
    <Wrapper>
      <section class="about-section" id="about">
        <div class="about-img ">
          <div class="container-fluid p-0">
            <div class="about-content offset-lg-7">
              <h3>What are i-Sticks?</h3>
              <br />
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more or less
                normal distribution of letters, as opposed to using Content
                here, content here', making it look like readable English.
                <br />
                <br />
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container-fluid {
    width: 63%;
  }
  .about-img {
    background-image: url(${i_sticks});
    background-size: cover;
    background-repeat: no-repeat;
    position: var(--position-relative);
    background-position: center;
    width: 100%;
    height: 100vh;
  }

  .about-content {
    padding-top: 198px;
    color: var(--font-color-for-content);
  }
  .about-content h3 {
    font-weight: var(--font-weight-600);
    font-size: var(--font-size-32px);
    line-height: 38px;
    color: var(--color-white);
    padding-bottom: 120px;
  }

  .about-content p {
    font-weight: var(--font-weight-300);
    font-size: var(--font-size-16px);
    color: var(--color-white);
    line-height: 19px;
  }
  @media screen and (min-width: 320px) and (max-width: 767px) {
    .about-section .container-fluid {
      width: 85%;
    }
    .about-content {
      padding-top: 50px;
      padding-left: 5px;
    }
    .about-content h3 {
      font-size: var(--font-size-24px);
      font-weight: var(--font-weight-500);
      line-height: 28px;
      padding-bottom: 0px;
    }
    .about-content p {
      font-size: var(--font-size-14px);
      line-height: 16px;
      padding-top: 0px;
    }
    .about-content p {
      padding-right: 0px;
      padding-top: 32px;
    }
    .about-img {
      background-position: 23%;
    }
    .about-img .container1 {
      padding: 0px 40px;
    }
  }
`;

export default Sticks;
