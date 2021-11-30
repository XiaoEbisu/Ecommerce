import { useLocation } from "react-router";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";
import Products from "../components/Products";
import { mobile } from "../Responsive";
import { useState, useEffect } from "react";

const Container = styled.div`
`;

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
  margin: 10px;
`;

const Option = styled.option`
  font-weight: 600;
`;

const ProductList = () => {

  //take category from pathname
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("latest");

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled >
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>pink</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled >
              Size
            </Option>
            <Option>50g</Option>
            <Option>100g</Option>
            <Option>pack of 10</Option>
            <Option>pack of 12</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="latest">Latest</Option>
            <Option value="asc">Price (Low to High)</Option>
            <Option value="desc">Price (High to Low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
