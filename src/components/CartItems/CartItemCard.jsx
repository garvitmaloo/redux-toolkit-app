import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { cartActions } from "../../store/cartSlice";

const ItemCard = styled.li`
  width: 95%;
  margin: 1rem auto;
  padding: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgb(220, 220, 220);
  display: flex;
  gap: 1.5rem;

  &:last-child {
    border-bottom: none;
  }

  @media only screen and (max-width: 560px) {
    flex-direction: column;
  }
`;

const CartItemImage = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
`;

const CartItemTitle = styled.h2`
  color: rgb(61, 61, 61);
  margin-bottom: 1.5rem;
`;

const CartItemPrice = styled.p`
  color: rgb(90, 90, 90);
`;

const Controllers = styled.div`
  color: rgb(90, 90, 90);
  margin: 0.5rem 0 1.25rem 0;
`;

const QuantityButton = styled.button`
  min-width: 28px;
  padding: 0.25rem;
  border: none;
  border-radius: 5px;
  background-color: #003049;
  color: #eae2b7;
  cursor: pointer;
  margin: 0 8px;
  font-size: 16px;
`;

const ActionButtons = styled.button`
  background-color: transparent;
  border: 2px solid #003049;
  border-radius: 5px;
  padding: 8px 20px;
  margin: 0.35rem 0.5rem;
  font-size: 16px;
  cursor: pointer;
`;

const CartItemCard = ({ itemData }) => {
  const { item, qty } = itemData;
  const dispatch = useDispatch();

  const removeFromCartHandler = (itemData) => {
    dispatch(cartActions.removeItemFromCart(itemData));
  };

  const moveToWishlistHandler = (itemData) => {
    dispatch(cartActions.moveToWishlist(itemData));
  };

  const increaseQuantityHandler = (itemData) => {
    dispatch(cartActions.increaseQuantity(itemData));
  };

  const decreaseQuantityHandler = (itemData) => {
    dispatch(cartActions.decreaseQuantity(itemData));
  };

  return (
    <ItemCard>
      <div>
        <CartItemImage src={item.imageUrl} alt="product image" />
      </div>
      <div>
        <CartItemTitle>{item.prodTitle}</CartItemTitle>
        <CartItemPrice>Price - {item.prodPrice} INR</CartItemPrice>

        <Controllers>
          <p style={{ display: "inline-block" }}>Quantity</p>

          <QuantityButton onClick={() => increaseQuantityHandler(itemData)}>
            +
          </QuantityButton>
          <span>{qty}</span>
          <QuantityButton onClick={() => decreaseQuantityHandler(itemData)}>
            -
          </QuantityButton>
        </Controllers>

        <ActionButtons
          onClick={() => {
            removeFromCartHandler(itemData);
          }}
        >
          Remove From Cart
        </ActionButtons>
        <ActionButtons onClick={() => moveToWishlistHandler(itemData)}>
          Move to Wishlist
        </ActionButtons>
      </div>
    </ItemCard>
  );
};

export default CartItemCard;
