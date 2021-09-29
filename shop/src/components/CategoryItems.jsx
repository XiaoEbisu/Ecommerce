import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 40vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5%;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 100px;
  color: #ffc24b;
  text-shadow: 4px 4px 10px #000000;
  margin-bottom: 20px;
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  box-shadow: 0px 0px 10px 2px #000000;
  background-color: #fff4f1;
  color: #0e606b;
  font-weight: 700;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.3);
  }
`;

const CategoryItems = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItems;
