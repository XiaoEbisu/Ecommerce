import { Email } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  height: 50vh;
  background-color: #ffb3ae;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 15px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 6vh;
  background-color: #fff4f1;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  overflow: hidden;

  ${mobile({ width: "80%" })}
  
  &:focus {
    background-color: white;
  }
`;

const Input = styled.input`
  flex: 9;
  border: none;
  background-color: transparent;
  margin-left: 30px;
  font-size: 20px;
  font-weight: 500;

  ${mobile({ width: "30%" })}

  &:focus {
    outline: none;
  }

  &:focus::placeholder {
    color: transparent;
    transition: all 0.2s ease;
  }
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #1697a6;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;

  ${mobile({ flex: 4 })}

  &:hover {
    color: black;
    transition: all 0.5s ease;
  }
`;

const Newletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="   Your email" />
        <Button>
          <Email fontSize="large" />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newletter;
