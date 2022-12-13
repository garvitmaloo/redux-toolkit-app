import React from "react";
import styled from "styled-components";

import CartItemCard from "./CartItemCard";

const CartItemsList = styled.ul`
  @media only screen and (max-width: 560px) {
    margin: 0 auto;
  }
`;

const CartItems = ({ items }) => {
  return (
    <CartItemsList>
      {items.length === 0 ? (
        <h1 style={{ padding: "1rem" }}>Your cart is empty</h1>
      ) : (
        ""
      )}
      {items.map((item) => (
        <CartItemCard key={item.item.prodId} itemData={item} />
      ))}
    </CartItemsList>
  );
};

export default CartItems;
