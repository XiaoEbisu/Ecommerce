import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { addProduct, updateProductQuantity } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";

const KEY = process.env.REACT_APP_STRIPE;
console.log(KEY);

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
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) =>
    props.color === "multicolor"
      ? "linear-gradient(130deg, blue,red,violet,orange,yellow,green,indigo)"
      : props.color};
  border: 1px solid black;
  margin: 0px 5px;
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

const ProductAmount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #0e606b;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
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
  const dispatch = useDispatch();
  const handleQuantity = (type, product) => {
    if (type === "dec") {
      product.quantity > 1 &&
        dispatch(updateProductQuantity({ ...product, quantity: -1 }));
    } else {
      dispatch(updateProductQuantity({ ...product, quantity: 1 }));
    }
  };

  const cart = useSelector((state) => state.cart);

  useEffect(() => {}, [cart]);

  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  const history = useHistory();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: Math.round((cart.total + Number.EPSILON) * 100),
        });
        console.log(res);
        history.push ("/success", {data: res.data}); 
      } catch (err) {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link
            style={{ textDecoration: "none", color: "Black" }}
            to="/products/"
          >
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bags({cart.quantity})</TopText>
            <TopText>Your wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <>
                <Product>
                  <ProductDetail>
                    <Link
                      style={{ textDecoration: "none", color: "Black" }}
                      to={`/product/${product._id}`}
                    >
                      <Image src={product.img} />
                    </Link>
                    <Details>
                      <ProductName>
                        <b>Product:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {product._id}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Size:</b> {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>

                  <PriceDetail>
                    <AmountContainer>
                      <Remove
                        style={{ cursor: "pointer" }}
                        onClick={() => handleQuantity("dec", product)}
                      />
                      <ProductAmount>{product.quantity}</ProductAmount>
                      <Add
                        style={{ cursor: "pointer" }}
                        onClick={() => handleQuantity("inc", product)}
                      />
                    </AmountContainer>
                    <ProductPrice>
                      {Math.round(
                        (product.price * product.quantity + Number.EPSILON) *
                          100
                      ) / 100}
                      €
                    </ProductPrice>
                  </PriceDetail>
                </Product>
                <Hr />
              </>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal: </SummaryItemText>
              <SummaryItemPrice>
                {Math.round((cart.total + Number.EPSILON) * 100) / 100}€
              </SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping: </SummaryItemText>
              <SummaryItemPrice>4.99€</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount: </SummaryItemText>
              <SummaryItemPrice>- 4.99€</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total: </SummaryItemText>
              <SummaryItemPrice>
                {Math.round((cart.total + Number.EPSILON) * 100) / 100}€
              </SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Seppeo shop"
              image="/seppeo.png"
              billingAddress
              shippingAddress
              description={`Your total is ${Math.round((cart.total + Number.EPSILON) * 100) / 100}€`}
              amount={Math.round((cart.total + Number.EPSILON) * 100)}
              currency="EUR"
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
