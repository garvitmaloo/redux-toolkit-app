import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar/Navbar";
import CartItems from "../components/CartItems/CartItems";
import CartSummary from "../components/CartSummary/CartSummary";

const MainContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media only screen and (max-width: 560px) {
    flex-direction: column;
  }
`;

const CartItemsContainer = styled.div`
  width: 70%;
  box-shadow: 0 0 5px -1px rgb(200, 200, 200);

  @media only screen and (max-width: 560px) {
    margin: 0 auto;
  }
`;

const Cart = () => {
  const cartState = useSelector((state) => state.cart);

  return (
    <>
      <Navbar />
      <MainContainer>
        <CartItemsContainer>
          <CartItems items={cartState.items} />
        </CartItemsContainer>
        <CartSummary />
      </MainContainer>
    </>
  );
};

export default Cart;
