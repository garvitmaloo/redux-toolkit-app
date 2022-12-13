import { useSelector } from "react-redux";
import styled from "styled-components";

import Navbar from "../components/Navbar/Navbar";
import ProductItem from "../components/Product/ProductItem";

const ProductsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 320px);
  gap: 2rem;
  margin-top: 1.5rem;
  padding: 0 1rem;
`;

const Home = () => {
  const storeProducts = useSelector((state) => state.store);

  return (
    <>
      <Navbar />
      {storeProducts.length === 0 && (
        <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Loading...</h1>
      )}
      <ProductsContainer>
        {storeProducts.map((productData) => (
          <ProductItem key={productData.prodId} productData={productData} />
        ))}
      </ProductsContainer>
    </>
  );
};

export default Home;
