import { useLocation } from "react-router";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";
import Products from "../components/Products";
import { mobile } from "../Responsive";
import { useState, useEffect } from "react";
import axios from "axios";

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
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); //when load anorther page, the cursor will reset to up of the page

    const getFilterFromAPIFilter = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/filter?cat=${cat}`
            : `http://localhost:5000/api/filter`
        );
        setSizes(res.data.sizes);
        setColors(res.data["colors"]);
      } catch (err) {
        console.log(err);
      }
    };

    getFilterFromAPIFilter();
  }, [filters.color, filters.size]); //render component first time only

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{cat? cat.toUpperCase() : "ALL PRODUCTS"}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled selected>Color</Option>
            {colors.map((color) => (
              <Option value={color}>{color}</Option>
            ))}
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled selected>Size</Option>
            {sizes.map((size) => (
              <Option value={size}>{size}</Option>
            ))}
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
