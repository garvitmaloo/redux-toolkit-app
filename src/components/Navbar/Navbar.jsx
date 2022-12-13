import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = styled.nav`
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  background-color: #003049;
  color: #eae2b7;

  @media only screen and (max-width: 560px) {
    padding: 1rem 0.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const LogoHeading = styled.h1`
  @media only screen and (max-width: 560px) {
    font-size: 1.25em;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  color: #eae2b7;
  padding: 6px 20px;
  margin: 0 5px;
  border-radius: 6px;
  border: 3px solid #eae2b7;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 560px) {
    padding: 3px 10px;
  }
`;

const ButtonSpan = styled.span`
  background-color: #eae2b7;
  color: #003049;
  padding: 3px 6px;
  margin-left: 8px;
  border-radius: 50%;

  @media only screen and (max-width: 560px) {
    font-size: 12px;
    padding: 1.25px 2.25px;
    margin-left: 4px;
  }
`;

const Navbar = () => {
  const navigate = useNavigate();
  const { cart, wishlist } = useSelector((state) => state);

  function cartClickHandler() {
    navigate("/cart");
  }

  function wishlistClickHandler() {
    navigate("/wishlist");
  }

  return (
    <Nav>
      <div style={{ alignSelf: "center" }}>
        <Link to="/" style={{ color: " #eae2b7" }}>
          <LogoHeading>StyleShop</LogoHeading>
        </Link>
      </div>
      <ButtonContainer>
        <NavButton onClick={cartClickHandler}>
          <ShoppingCartIcon style={{ marginRight: "5px" }} /> Cart
          <ButtonSpan>{cart.totalItems}</ButtonSpan>
        </NavButton>

        <NavButton onClick={wishlistClickHandler}>
          <FavoriteIcon style={{ marginRight: "5px" }} /> Wishlist
          <ButtonSpan>{wishlist.totalItems}</ButtonSpan>
        </NavButton>
      </ButtonContainer>
    </Nav>
  );
};

export default Navbar;
