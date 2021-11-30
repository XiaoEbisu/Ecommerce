import {
  FavoriteBorder,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0%;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5%;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 350px;
  max-width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff4f1;
  position: relative;
  border-radius: 5%;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 330px;
  height: 330px;
  border-radius: 50%;
  background: white;
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;
  overflow: hidden;

  ${mobile({ width: "320px",
  height: "280px"  })};
`;

const Image = styled.img`
  height: 100%;
  z-index: 2;
  position: absolute;
  object-fit: cover;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  box-shadow: 0px 0px 10px 2px #000000;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #${(props) => (props.bg ? props.bg : "fff4f1")};
    transform: scale(1.5);
  }
`;

const ProductItem = ({ item }) => {
  return (
    <Container>
      <Circle>
        <Image src={item.img} />
      </Circle>
      <Info>
        <Icon bg="ef233c">
          <FavoriteBorder />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`} style={{ textDecoration: 'none', color: 'Black'}}>
          <SearchOutlined />
          </Link>
        </Icon>
        <Icon bg="bde0fe">
          <ShoppingCartOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItem;
