import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// imglist
import { styled } from "styled-components";
import Container from "../Container/Container";
import Product from "../../assets/imgProducts/product.svg";
import Product1 from "../../assets/imgProducts/product1.svg";
import Product2 from "../../assets/imgProducts/product2.svg";
import Product3 from "../../assets/imgProducts/product3.svg";
import Product4 from "../../assets/imgProducts/product4.svg";

const StyledNewAndPopular = styled.div`
  position: relative;
  width: 100%;
  h3 {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    text-transform: uppercase;
    rotate: 270deg;
  }
  .tit{
    position: absolute;
    left: -1.5%;
    top: 40%;

  }
  .MainContainer {
    width: 1340px;
  }
  .ImgItems {
    cursor: pointer;
  }
  .overlay {
    position: absolute;
    bottom: 0;
    background-color: #1e2832;
    color: #ffffff;
    width: 100%;
    opacity: 0;
    z-index: 999;
  }
  .name {
    display: inline-block;
    padding-left: 12px;
  }
  .count {
    position: absolute;
    display: inline-block;
    right: 2%;
  }
  .ImgItems:hover .overlay {
    opacity: 1;
    z-index: 999;
  }
`;
const NewAndPopularStyles = () => {
  return (
    <StyledNewAndPopular>
      <div className="tit">
        <h3>explore new and popular styles</h3>
      </div>
      <Container>
        <ImageList
          sx={{ width: "100%", height: 648 }}
          variant="quilted"
          cols={4}
          className="imglist"
        >
          <ImageListItem
            className="ImgItems"
            key={"prd"}
            cols={2}
            rows={2}
            style={{
              height: "648px",
              width: "648px",
            }}
          >
            <img src={Product} alt="product" loading="lazy" />
            <div className="overlay">
              <p className="name">Manto</p>
              <p className="count">86 Product</p>
            </div>
          </ImageListItem>
            <ImageListItem
            className="ImgItems"
              key={"prd"}
              cols={1}
              rows={1}
              style={{
                height: "312px",
                width: "312px",
              }}
            >
              <img src={Product4} alt="product" loading="lazy" />
              <div className="overlay">
                <p className="name">Pants</p>
                <p className="count">200 Product</p>
              </div>
            </ImageListItem>
          <ImageListItem
            className="ImgItems"
            key={"prd"}
            cols={1}
            rows={1}
            style={{
              height: "312px",
              width: "312px",
              marginBottom: "20px",
            }}
          >
            <img src={Product1} alt="product" loading="lazy" />
            <div className="overlay">
              <p className="name">Coat</p>
              <p className="count">520 Product</p>
            </div>
          </ImageListItem>
          <ImageListItem
          className="ImgItems"
            key={"prd"}
            cols={1}
            rows={1}
            style={{
              height: "312px",
              width: "312px",
            }}
          >
            <img src={Product3} alt="product" loading="lazy" />
            <div className="overlay">
              <p className="name">Shirt</p>
              <p className="count">320 Product</p>
            </div>
          </ImageListItem>
            <ImageListItem
              className="ImgItems"
              key={"prd"}
              cols={1}
              rows={1}
              style={{
                height: "312px",
                width: "312px",
              }}
            >
              <img src={Product2} alt="product" loading="lazy" />
              <div className="overlay">
                <p className="name">Jacket</p>
                <p className="count">103 Product</p>
              </div>
            </ImageListItem>
        </ImageList>
      </Container>
    </StyledNewAndPopular>
  );
};
export default NewAndPopularStyles;
