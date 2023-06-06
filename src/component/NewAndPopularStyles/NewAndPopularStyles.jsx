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
  width: 100%;
  h3 {
    position: absolute;
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    text-transform: uppercase;
    rotate: -90deg;
    left: -1.5%;
    bottom: -59%;
  }
  .imglist{
    position: relative;
  }
  .MainContainer{
    width: 1340px;
  }
`;
const NewAndPopularStyles = () => {
  return (
    <StyledNewAndPopular>
      <h3>explore new and popular styles</h3>
      <Container>
        <ImageList
          sx={{ width: "100%", height: 648}}
          variant="quilted"
          cols={4}
            className="imglist"
          >
            <ImageListItem
              key={'prd'}
              cols={2}
              rows={2}
              style={{
                height: "648px",
                width: "648px"
            }}
            >
              <img
                src={Product}
                alt="product"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem
              key={'prd'}
              cols={1}
              rows={1}
              style={{
                height: "312px",
                width: "312px",
                marginBottom: "20px"
            }}
            >
              <img
                src={Product1}
                alt="product"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem
              key={'prd'}
              cols={1}
              rows={1}
              style={{
                height: "312px",
                width: "312px"            
            }}
            >
              <img
                src={Product2}
                alt="product"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem
              key={'prd'}
              cols={1}
              rows={1}
              style={{
                height: "312px",
                width: "312px"            
            }}
            >
              <img
                src={Product3}
                alt="product"
                loading="lazy"
              />
            </ImageListItem>
            <ImageListItem
              key={'prd'}
              cols={1}
              rows={1}
              style={{
                height: "312px",
                width: "312px"            
            }}
            >
              <img
                src={Product4}
                alt="product"
                loading="lazy"
              />
            </ImageListItem>
        </ImageList>
      </Container>
    </StyledNewAndPopular>
  );
};
export default NewAndPopularStyles;
