import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://www.zess.fr/blog/wp-content/uploads/2020/04/dsc_2172-scaled.jpg")
      center;
  display: flex;
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-style: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;

  &:focus {
    outline-color: #0e606b;
  }
  
  &:focus::placeholder {
    color: transparent;
    transition: all 0.2s ease;
  }
`;

const Agreement = styled.span`
  font-style: 12px;
  margin: 20px 0px;
`;

const ButtonsWrapper = styled.div`
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
  border: none;
  padding: 15px 20px;
  background-color: #0e606b;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personnal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>

          <ButtonsWrapper>
            <Link>Already have an account ?</Link>
            <Button>CREATE</Button>
          </ButtonsWrapper>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
