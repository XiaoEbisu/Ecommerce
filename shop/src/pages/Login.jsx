import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://grene-prod-shop-media.azureedge.net/zqjmjb34/2020-crochet-inspiration-1-v1.jpg?format=jpg&width=1600&height=848&quality=75&mode=crop&center=0.5248733389487447,0.43166666666666664")
      center;
  display: flex;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-style: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;

  &:focus {
    outline-color: #0e606b;
  }

  &:focus::placeholder {
    color: transparent;
    transition: all 0.2s ease;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Link = styled.a`
  margin: 10px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #f47068;
  }
`;

const Button = styled.button`
  width: 40%;
  border: 1px solid;
  padding: 15px 20px;
  color: white;
  cursor: pointer;
  
  background: linear-gradient(to left, #fff4f1 50%, #0e606b 50%);
  background-size: 200%;
  background-position: left bottom;
  transition: 0.5s ease-out;

  &:hover {
    background-color: #fff4f1;
    color: black;
    background-position:right;
    border:1px solid #0e606b;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <LinkWrapper>
            <Link>Don't remember your password?</Link>
            <Link>Don't have an account?</Link>
          </LinkWrapper>
          <ButtonsWrapper>
            <Button>LOGIN</Button>
          </ButtonsWrapper>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
