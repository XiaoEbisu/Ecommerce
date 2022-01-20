import React from "react";
import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Badge, makeStyles, IconButton } from "@material-ui/core";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0; /* required */
  z-index: 999;
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopLeft = styled.div``;

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const TopAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const IconBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: "0px",
    top: "5px",
    backgroundColor: "#f80029",
    color: "white",
    fontWeight: "bold",
  },
}));

const useStyles = makeStyles((theme) => ({
  button: {
    "@media (max-width: 400px)": {
      display: "none",
    },
    marginRight: "10px",
    color: "#555",
  },
}));

export default function Topbar() {
  const classes = useStyles();
  return (
      <Container>
        <Wrapper>
          <TopLeft>
            <Logo>Seppeo admin</Logo>
          </TopLeft>
          <TopRight>
            <IconButton className={classes.button}>
              <IconBadge badgeContent="2">
                <NotificationsNone />
              </IconBadge>
            </IconButton>
            <IconButton className={classes.button}>
              <Language />
            </IconButton>
            <IconButton className={classes.button}>
              <Settings />
            </IconButton>
            <TopAvatar src="supportmale-512.png" />
          </TopRight>
        </Wrapper>
      </Container>
  );
}
