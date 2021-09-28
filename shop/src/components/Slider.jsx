import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

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
  z-index: 2;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const SlideContainer = styled.div`
  width: 100vw;
  height: 80vh;
  display:flex;
`;

const DivBlock = styled.div`
  width: 10vw;
  height: 100%;
`;

const Slide = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  margin: 10vh;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  justify-content:center;
`;

const Image = styled.img`
  margin: 50px auto 50px auto;
  height: 80%;
  display:block;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const InfoWrapper = styled.div`
  margin: 50px;
`;

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
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction == "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosRounded />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <SlideContainer>
            <DivBlock></DivBlock>
            <Slide bg={item.bg}>
              <ImgContainer>
                <Image src={item.img}></Image>
              </ImgContainer>
              <InfoContainer>
                <InfoWrapper>
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <Button>SHOP NOW</Button>
                </InfoWrapper>
              </InfoContainer>
            </Slide>
            <DivBlock></DivBlock>
          </SlideContainer>
        ))}
        ;
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosRounded />
      </Arrow>
    </Container>
  );
};

export default Slider;
