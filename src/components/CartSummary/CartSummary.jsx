import React from "react";
import styled from "styled-components";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../store/cartSlice";

const CartSummaryContainer = styled.div`
  min-width: 28%;
  height: min-content;
  border-radius: 8px;
  padding: 2.5rem 1rem 1rem;
  box-shadow: 2px 0 5px -1px rgb(200, 200, 200);
`;

const CartItemTitle = styled.h1`
  margin-bottom: 1rem;
`;

const CheckoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  margin: 1.5rem 0;
  font-size: 16px;
  cursor: pointer;
  background-color: #003049;
  color: #eae2b7;
  border: none;
  border-radius: 5px;
`;

const CartSummary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { totalItems, totalPrice } = useSelector((state) => state.cart);

  const checkoutHandler = () => {
    if (totalItems === 0) {
      return alert("Cannot checkout an empty cart");
    }

    navigate("/checkout");
    dispatch(cartActions.clearCart());
  };

  return (
    <CartSummaryContainer>
      <CartItemTitle>Cart Summary</CartItemTitle>
      <p>Total Items - {totalItems}</p>
      <p>Total Price - {totalPrice} INR</p>

      <CheckoutButton onClick={() => checkoutHandler()}>
        Checkout <ArrowRightAltIcon style={{ marginLeft: "8px" }} />
      </CheckoutButton>
    </CartSummaryContainer>
  );
};

export default CartSummary;
