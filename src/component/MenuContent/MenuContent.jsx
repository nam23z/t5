import * as React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Button } from "../Button/Button";
import { styled } from "styled-components";
import Container from "../Container/Container";
const StyledMenuContent = styled.div`
  font-family: "Open Sans";
  h2 {
    text-transform: capitalize;
    font-family: "Roboto";
    font-size: 50px;
    font-weight: 500;
    line-height: 59px;
    text-align: center;
    margin-top: 140px;
  }

  .nav1 {
    display: flex;
    justify-content: space-between;
    span {
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    text-decoration: none;
    opacity: 0.5;
    color: #000000;
  }
  span:hover {
    color: #ff6f61;
  }
  }
  .nav2 {
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 16px;
    .btn {
      width: 92px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }
    .btn:hover {
      background-color: #ff6f61;
    }
  }
  .Mui-selected{
    color: #000000;
    font-weight: bold;
  }
`;
const MenuContent = ({ title, children, parent }) => {
  const [value, setValue] = useState(0);
  return (
    <Container>
      <StyledMenuContent title={title}>
        <h2>{title}</h2>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            justifyContent={"space-between"}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={3.8}>
              {/* <div className="nav1"> */}
                <BottomNavigation
                className="menu"
                  showLabels
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                >
                  <BottomNavigationAction label="All Products"/>
                  <BottomNavigationAction label="T-Shirt"/>
                  <BottomNavigationAction label="Hoodies"/>
                  <BottomNavigationAction label="Jacket"/>
                </BottomNavigation>
              {/* </div> */}
            </Grid>
            <Grid item xs={1.04}>
              <div className="nav2">
                <Button className="btn" width={"92px"} height={"32px"}
                >
                  {children}
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </StyledMenuContent>
    </Container>
  );
};
export default MenuContent;
