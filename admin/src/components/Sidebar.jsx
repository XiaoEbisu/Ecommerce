import React from "react";
import styled from "styled-components";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
import { rgbToHex } from "@material-ui/core";

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px; /* required */
  z-index: 999;
`;

const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const Menu = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 13px;
  color: rgb(180, 180, 180);
`;

const List = styled.ul`
  list-style: none;
  padding: 5px;
`;

const Item = styled.li`
  padding: 5px;
  margin: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.active === "true" ? "rgb(133, 133, 185)" : ""};
  color: ${(props) => props.active === "true" ? "white" : ""};

  &:hover{
    background-color: rgb(133, 133, 185);
    color: white;
    transition: all 0.3s ease;
  }
`;

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <Item active="true">
              <LineStyle style={{marginRight: "5px", fontSize: "20px"}}/>
              Home
            </Item>
            <Item>
              <Timeline style={{marginRight: "5px", fontSize: "20px"}}/>
              Analytics
            </Item>
            <Item>
              <TrendingUp style={{marginRight: "5px", fontSize: "20px"}}/>
              Sales
            </Item>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
