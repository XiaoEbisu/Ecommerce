import { Badge, makeStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";


const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex; // horizontal
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "2px 0" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  ${mobile({ margin: "0px auto"})};
`;

const Input = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
  ${mobile({ width: "50px" })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -5,
    top: 15,
    backgroundColor: "#f47068",
    color: "white",
    fontWeight: "bold",
  },
}));

const useStyles = makeStyles(theme => ({
  button: {
    "@media (max-width: 400px)": {
      display: "none"
    }
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <Container>
      <Wrapper>
        <Left>
          <IconButton className={classes.button}>
            <Language>EN</Language>
          </IconButton>
          <SearchContainer>
            <Input placeholder="Search"/>
            <Search style={{color:"gray", fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
        <Logo>
          <Link to="/"  style={{ textDecoration: 'none', color: 'Black'}}>
            Seppeo.
            </Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={4}>
                <ShoppingCartOutlined />
              </StyledBadge>
            </IconButton>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
