import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import {Button} from '../Button/Button';
import { styled } from "styled-components";
import Container from "../Container/Container";
const StyledMenuContent = styled.div`
  h2 {
    text-transform: capitalize;
    font-family: "Roboto";
    font-size: 50px;
    font-weight: 500;
    line-height: 59px;
    text-align: center;
    margin-top: 140px;
  }
  .nav1{
    display: flex;
    justify-content: space-between;
    a{
        font-family: 'Open Sans';
        font-size: 16px;
        font-weight: 600;
        line-height: 22px;
        text-decoration: none;
        opacity: 0.5;
        color: #000000;
    }
  }
  .nav2{
    font-family: 'Open Sans';
    font-weight: 400;
    font-size: 16px;
    .btn{
        width: 92px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
  }
`
const MenuContent = ({title, children , parent}) => {
    return(
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
            <Grid item xs={3.4}>
              <div className="nav1">

              <NavLink to="/">All Products</NavLink>

              <NavLink to={parent + "/tshirt"}>T-Shirt</NavLink>

              <NavLink to={parent + "/hoodies"}>Hoodies</NavLink>

              <NavLink to={parent + "/jacket"}>Jacket</NavLink>
              </div>
            </Grid>
            <Grid item xs={1.04}>
              <div className="nav2">
                <Button className="btn" width={"92px"} height={"32px"}>
                        {children}
                    </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
            </StyledMenuContent>
        </Container>
    )
}
export default MenuContent;