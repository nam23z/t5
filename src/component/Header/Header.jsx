import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "../Container/Container";
import { styled } from "styled-components";
import Button from '../Button';
import { ReactComponent as IconSearch } from "../../assets/icons/iconSearch.svg";
import { ReactComponent as IconAccount } from "../../assets/icons/iconUser.svg";
import { ReactComponent as IconShopingb } from "../../assets/icons/iconShoppingBlack.svg";
import { ReactComponent as IconShopingW } from "../../assets/icons/iconShoppingwhite.svg";
import ImagePro from '../../assets/imgProductsHeader/image-product.svg';
import hlcL from '../../assets/imgOrther/hlcL.svg';
import hlcR from '../../assets/imgOrther/hlcR.svg';
const StyledHeader = styled.div`
    position: relative;
  background-color: #F0F0F0;
  height: 874px;
  h1 {
    font-family: "AmstelvarAlpha";
    font-weight: 400;
    font-size: 42px;
    line-height: 50.4px;
    margin-bottom: 9px;
}
.menuHeader {
    border-bottom: 1px solid #e3e3e3;
}
  .icon {
    cursor: pointer;
  }
  .item1 {
    input {
      background-color: transparent;
      border: none;
      outline: none;
    }
}
  .item2 {
    text-align: center;
}
.item3 {
    display: flex;
    gap: 24.5px;
}
.Banner{
    font-family: 'Roboto';
    margin-top: 135px;
}
.contentL{
    text-transform: capitalize;
    h2{
        font-weight: 300;
        font-size: 74px;
        line-height: 55px;
    }
    p{
        font-size: 30px;
        line-height: 55px;
    }
    .btn{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 29px;
        font-family: 'Roboto';
        font-weight: 400;
        line-height: 34px;
        padding: 19px 26px;
    }
  }
  .contentR{
    text-align: right;
  }
  .hlcL{
    position: absolute;
    bottom: 18%;
  }
  .hlcR{
    position: absolute;
    right: 0;
    bottom: 20%;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Box className="menuHeader" sx={{ flexGrow: 1 }}>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <div className="item1">
                <div className="SearchHeader">
                  <IconSearch className="icon"></IconSearch>
                  <input type="text" />
                </div>
              </div>
            </Grid>
            <Grid item>
              <div className="item2">
                <h1>Lisa Store</h1>
              </div>
            </Grid>
            <Grid item>
              <div className="item3">
                <div className="account">
                  <IconAccount></IconAccount>
                  <span>Account</span>
                </div>
                <div className="Shoping">
                  <IconShopingb></IconShopingb>
                  <span>Shoping</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
            {/* banner */}
          <Grid className="Banner" container spacing={2} columns={16}>
            <Grid item xs={9}>
              <div className="contentL">
                <h2>collections</h2>
                <p>you can explore ans shop many different collection from various barands here.</p>
                <Button className="btn"><IconShopingW width={"24px"} height={"24px"}/>Shop Now</Button>
              </div>
            </Grid>
            <Grid item xs={7}>
              <div className="contentR">
                <img src={ImagePro} alt="banner" />
              </div>
            </Grid>
          </Grid>
      </Container>
      <div className="hlcL">
        <img src={hlcL} alt="hlcLeft" />
      </div>
      <div className="hlcR">
        <img src={hlcR} alt="hlcRight" />
      </div>
    </StyledHeader>
  );
};
export default Header;
