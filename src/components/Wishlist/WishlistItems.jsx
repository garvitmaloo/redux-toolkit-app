import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { cartActions } from "../../store/cartSlice";
import { wishlistActions } from "../../store/wishlistSlice";

const ItemCard = styled.li`
  padding: 1rem;
  box-shadow: 0 0 5px -1px rgb(200, 200, 200);
`;

const ItemImage = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
`;

const ItemTitle = styled.h2`
  font-size: 20px;
  color: rgb(60, 60, 60);
  margin: 1rem 0;
`;

const ActionButtons = styled.button`
  background-color: transparent;
  border: 2px solid #003049;
  border-radius: 5px;
  padding: 6px 16px;
  margin-right: 0.5rem;
  font-size: 14px;
  cursor: pointer;
`;

const WishlistItems = ({ items }) => {
  const dispatch = useDispatch();

  const removeFromWishlistHandler = (item) => {
    dispatch(wishlistActions.removeItemFromWishlist(item));
  };

  const addToCartHandler = (item) => {
    dispatch(cartActions.addItemToCart({ item, qty: 1 }));
  };

  return (
    <>
      {items.map((item) => (
        <ItemCard key={item.prodId}>
          <ItemImage src={item.imageUrl} alt="product image" />
          <ItemTitle>{item.prodTitle}</ItemTitle>

          <ActionButtons
            onClick={() => {
              removeFromWishlistHandler(item);
            }}
          >
            Remove
          </ActionButtons>
          <ActionButtons
            onClick={() => {
              addToCartHandler(item);
            }}
          >
            Add to cart
          </ActionButtons>
        </ItemCard>
      ))}
    </>
  );
};

export default WishlistItems;
