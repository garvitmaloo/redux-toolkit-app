import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cartSlice";
import { wishlistActions } from "../../store/wishlistSlice";

const ProductImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const ProductTitle = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: rgb(41, 41, 41);
  margin: 8px 0;
  letter-spacing: 0.5px;
`;

const ProductPrice = styled.p`
  font-size: 14px;
  margin-bottom: 1.5rem;
  font-weight: bold;
  color: rgb(41, 41, 41);
  letter-spacing: 0.5px;
`;

const ProductButton = styled.button`
  display: block;
  width: 75%;
  border: none;
  border-radius: 15px;
  background-color: #003049;
  color: #eae2b7;
  padding: 16px;
  margin: 4px auto;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0f4966;
  }
`;

const ProductItem = ({ productData }) => {
  const dispatch = useDispatch();

  function addToCartHandler() {
    if (productData.inCart === true) {
      return alert("Product already exist in the cart");
    }
    dispatch(cartActions.addItemToCart({ item: productData, qty: 1 }));
  }

  function addToWishlistHandler() {
    if (productData.inWishlist === true) {
      return alert("Product already exist in the wishlist");
    }
    dispatch(wishlistActions.addItemToWishlist(productData));
  }

  const cartButtonText = productData.inCart
    ? "✅ Added To Cart"
    : "Add To Cart";
  const wishlistButtonText = productData.inWishlist
    ? "✅ Added To Wishlist"
    : "Add To Wishlist";

  return (
    <div className={classes["product-card"]}>
      <ProductImage src={productData.imageUrl} alt={productData.prodTitle} />
      <ProductTitle>{productData.prodTitle}</ProductTitle>
      <ProductPrice>Price - {productData.prodPrice} INR</ProductPrice>

      <div className={classes.overlay}>
        <ProductButton onClick={addToCartHandler}>
          {cartButtonText}
        </ProductButton>
        <ProductButton onClick={addToWishlistHandler}>
          {wishlistButtonText}
        </ProductButton>
      </div>
    </div>
  );
};

export default ProductItem;
