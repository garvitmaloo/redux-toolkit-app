import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const RedirectButton = styled.button`
  display: flex;
  align-items: center;
  margin: 0 auto;
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

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>
        Your order has been confirmed!
      </h1>
      <RedirectButton onClick={() => navigate("/")}>
        Continue Shopping <ArrowRightAltIcon style={{ marginLeft: "8px" }} />
      </RedirectButton>
    </div>
  );
};

export default Confirmation;
