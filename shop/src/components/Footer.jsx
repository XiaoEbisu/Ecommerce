import styled from "styled-components";
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  ThumbUp,
  Phone,
  MailOutline,
} from "@material-ui/icons";
import {
  faCcMastercard,
  faCcVisa,
  faCcPaypal,
  faCcStripe,
} from "@fortawesome/free-brands-svg-icons";

import //faPaypal
"@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  height: 50vh;
  background-color: #1697a6;

  ${mobile({ flexDirection: "column"  })}
`;

const FooterContainer = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({ flexDirection: "column"  })}
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
  overflow: hidden;

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

  ${mobile({ display: "none" })};
`;

const LinkItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 70%;

  &:hover {
    transform: scale(1.1);
    transition: all 0.5s ease-in-out;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Column = styled.div`
  float: left;
  width: 50%;
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
  margin-bottom: 10px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: #ffb3ae;
    text-shadow: 1px 5px 5px #000000;
    transform: all 0.5s ease;
  }
`;

const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        <Left>
          <Logo>Seppeo.</Logo>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
          <LinkItem href="#">
            <Image src="/seppeo_no_border.png" />
          </LinkItem>
        </Center>
        <Right>
          <Column>
            <Title>Check it out!</Title>
            <List>
              <ListItem>Home</ListItem>
              <ListItem>Cart</ListItem>
              <ListItem>
                Best seller <ThumbUp style={{ verticalAlign: "bottom", marginLeft: "10px" }} />
              </ListItem>
              <ListItem>My account</ListItem>
              <ListItem>Wishlist</ListItem>
              <ListItem>Terms</ListItem>
            </List>
          </Column>
          <Column>
            <Title>Contact</Title>
            <List>
              <ListItem>
                <Phone style={{ verticalAlign: "bottom", marginRight: "10px" }} /> +(00) 12 34 56 78
                90
              </ListItem>
              <ListItem>
                <MailOutline style={{ verticalAlign: "bottom", marginRight: "10px" }} />{" "}
                contact@seppeo.shop
              </ListItem>
              <SocialContainer>
                <SocialIcon>
                  <FontAwesomeIcon icon={faCcMastercard} size="lg" />
                </SocialIcon>
                <SocialIcon>
                  <FontAwesomeIcon icon={faCcVisa} size="lg" />
                </SocialIcon>
                <SocialIcon>
                  <FontAwesomeIcon icon={faCcPaypal} size="lg" />
                </SocialIcon>
              </SocialContainer>
            </List>
          </Column>
        </Right>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
