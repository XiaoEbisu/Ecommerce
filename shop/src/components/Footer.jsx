import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  ThumbUp,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  background-color: #1697a6;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffb3ae;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;

  &:hover {
    color: #ffb3ae;
    background-color: black;
    transition: all 0.3s ease;
    transform: scale(1.3);
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 70%;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
    transition: all 0.5s ease-in-out;
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const ListItem = styled.li`
  margin-bottom: 5px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Seppeo.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Image src="/seppeo_no_border.png" />
      </Center>
      <Right>
        <Title>Check it out!</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>
            Best seller <ThumbUp style={{ verticalAlign : "bottom" }} />
          </ListItem>
          <ListItem>My account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Right>
    </Container>
  );
};

export default Footer;
