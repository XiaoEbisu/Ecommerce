import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin: auto;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: ${(props) =>
    props.color === "multicolor"
      ? "linear-gradient(130deg, red,orange,yellow,green,blue,violet)"
      : props.color};
  border: 2px solid black;
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: 1px solid;
  color: white;
  font-weight: 600;
  cursor: pointer;

  background: linear-gradient(to left, #fff4f1 50%, #0e606b 50%);
  background-size: 200%;
  background-position: left bottom;
  transition: 0.5s ease-out;
  &:hover {
    background-color: #fff4f1;
    color: black;
    background-position: right;
    border: 1px solid #0e606b;
  }
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bags(2)</TopText>
            <TopText>Your wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://alitools.io/en/showcase/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHf5cb41a0a8cc43bfbad8ab6488b4f137F.jpg_480x480.jpg_.webp" />
                <Details>
                  <ProductName>
                    <b>Product: </b>
                    Metal Hooks Crochet Kit 2-10mm
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>
                    1982361957137
                  </ProductId>
                  <ProductColor color="multicolor" />
                  <ProductSize>
                    <b>Size: </b>3
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <AmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </AmountContainer>
                <ProductPrice>15 €</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://d2tk9av7ph0ga6.cloudfront.net/image/catalog/2019/rb-88-colorbag-8-700xauto.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b>
                    Rainbow cotton yarn 3mm
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>
                    107863598273
                  </ProductId>
                  <ProductColor color="#fad2e1" />
                  <ProductSize>
                    <b>Size: </b>50g
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <AmountContainer>
                  <Add />
                  <ProductAmount>3</ProductAmount>
                  <Remove />
                </AmountContainer>
                <ProductPrice>9 €</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal: </SummaryItemText>
              <SummaryItemPrice>24 €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping: </SummaryItemText>
              <SummaryItemPrice>4.99 €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount: </SummaryItemText>
              <SummaryItemPrice>- 4.99 €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total: </SummaryItemText>
              <SummaryItemPrice>24 €</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
