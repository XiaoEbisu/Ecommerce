import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newletter from "../components/Newletter";
import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethods";
import { MULTICOLOR } from "../cst";
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
  object-fit: scale-down;
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
  background: ${(props) =>
    props.color === MULTICOLOR
      ? "linear-gradient(130deg, red,orange,yellow,green,blue,violet)"
      : props.color};
  border: 1px solid black;
  margin: 0px 5px;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
    transition: all 0.2s ease;
    opacity: 1;
  }
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

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
    background-color: #19b3c8;
    color: white;
    transform: scale(1.1);
    transition: all 0.2s ease;
  }
`;

const Product = () => {
  //take category from pathname
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <WrapperInfo>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>{product.price} €</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                {product.color?.map((c) => (
                  <FilterColor
                    className={
                      c == color ? "selected-color" : "not-selected-color"
                    }
                    color={c}
                    key={c}
                    onClick={() => setColor(c)}
                  />
                ))}
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={(e) => setSize(e.target.value)}>
                  {product.size?.map((s) => (
                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                  ))}
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove onClick={() => handleQuantity("dec")} />
                <Amount>{quantity}</Amount>
                <Add onClick={() => handleQuantity("inc")} />
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
