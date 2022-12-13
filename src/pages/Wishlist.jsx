import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Navbar from "../components/Navbar/Navbar";
import WishlistItems from "../components/Wishlist/WishlistItems";

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #003049;
  text-align: center;
  margin: 2rem 0;
`;

const WishlistContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 2rem;
  padding: 0 2rem;
`;

const Wishlist = () => {
  const { items } = useSelector((state) => state.wishlist);

  return (
    <div>
      <Navbar />
      <PageTitle>Your Wishlist</PageTitle>
      {items.length === 0 ? (
        <h1 style={{ padding: "1rem" }}>Your wishlist is empty</h1>
      ) : (
        ""
      )}
      <WishlistContainer>
        <WishlistItems items={items} />
      </WishlistContainer>
    </div>
  );
};

export default Wishlist;
