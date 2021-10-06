import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px 100px;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const WrapperInfo = styled.div`
  flex: 1;
`;

const InfoContainer = styled.div`
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 700;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-size: 40px;
  font-weight: 300;
`;

const FilterContainer = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
  padding-right: 5px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid black;
  margin: 0px 5px;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
    transition: all 0.5s ease;
  }
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option`
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #0e606b;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  font-weight: 700;
  border-radius: 10px;
  border: 2px solid #0e606b;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #19B3C8;
    color: white;
    transform: scale(1.1);
    transition: all 0.2s ease;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.etsystatic.com/12316004/r/il/321d8b/2621497143/il_fullxfull.2621497143_ttwq.jpg" />
        </ImgContainer>
        <WrapperInfo>
          <InfoContainer>
            <Title>Chenille yarn</Title>
            <Desc>
              This Chenille Yarn is a wonderful material for any snuggly
              handmade home decor products. The soft polyester chenille fabric
              composition is tufted unlike any other type of yarn. It is
              naturally resistant to dirt,creates a beautiful multi-textural
              look, leaving you with a perpetually luxurious piece of work.
              Ideal for making blankets, rugs, pillows, and pet beds doll making
              and even hats. This chenille crochet yarn feels like wonderful
              with high quality material and crafts, you won't be disappinted
              with this yarn after you buy it. <br />
              Recommended needle size is US 7 (4.5mm). Suggested crochet hook
              size is H-8 (5mm) Product Feature: 100% <br />
              Polyester chenille yarn Super soft worsted yarn Fluffy Luxurious
              velvet yarn
            </Desc>
            <Price>3 €</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="white" />
                <FilterColor color="Lavender" />
                <FilterColor color="#fae1dd" />
                <FilterColor color="green" />
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption> 50g </FilterSizeOption>
                  <FilterSizeOption> 100g </FilterSizeOption>
                  <FilterSizeOption> 200g </FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </WrapperInfo>
      </Wrapper>
      <Newletter />
      <Footer />
    </Container>
  );
};

export default Product;
