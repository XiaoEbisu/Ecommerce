import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #ffb3ae;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffddd2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(pros) => pros.direction === "left" && "20px"};
  right: ${(pros) => pros.direction === "right" && "20px"};
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const Slide = styled.div`
  width: 85vw;
  height: 85vh;
  display: flex;
  margin: 5vh auto 5vh auto;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
  margin: 50px;
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const InfoWrapper = styled.div`
margin: 50px;
`

const Title = styled.h1`
  font-size: 70px;
  font-weight: 700;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 3px;
  justify-content: center;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosRounded />
      </Arrow>
      <Wrapper>
        <Slide bg="fff4f1">
          <ImgContainer>
            <Image src="https://tricocotier.com/storage/2021/07/dinette-crochet.jpg"></Image>
          </ImgContainer>
          <InfoContainer>
              <InfoWrapper>
            <Title>Summer Sale!</Title>
            <Desc>GET 30% FOR NEW ARRIVALS</Desc>
            <Button>SHOP NOW</Button>
            </InfoWrapper>
          </InfoContainer>
        </Slide>
      </Wrapper>

      <Arrow direction="right">
        <ArrowForwardIosRounded />
      </Arrow>
    </Container>
  );
};

export default Slider;
