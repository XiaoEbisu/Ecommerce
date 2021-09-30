import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  padding-top: 20px;
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
`;

const Option = styled.option`
font-weight: 600;
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Let's crochet !</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort products:</FilterText>
          <Select>
            <Option selected>Latest</Option>
            <Option>Price (Low to High)</Option>
            <Option>Price (High to Low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
