import * as React from "react";
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
    font-family: "Roboto";
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    text-transform: uppercase;
    rotate: 270deg;
  }
  .tit {
    transform: translate(-36%, 952%);
  }
  .imglist {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .column {
    flex: 50%;
    max-width: 50%;
    padding-right: 12px;
  }
  .column2 {
    flex: 50%;
    max-width: 50%;
    padding-left: 12px;
    .ImgItems:last-child {
      padding-top: 20px;
    }
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .column3 {
    flex: 50%;
    max-width: 50%;
    padding-right: 12px;
  }
  .column4 {
    flex: 50%;
    max-width: 50%;
    padding-left: 12px;
  }
  .ImgItems {
    cursor: pointer;
    position: relative;
  }
  .overlay {
    position: absolute;
    bottom: 0.5%;
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
        <div className="imglist">

          <div className="column">
            <div className="ImgItems">
              <img src={Product} alt="product" loading="lazy" />
              <div className="overlay">
                <p className="name">Manto</p>
                <p className="count">86 Product</p>
              </div>
            </div>
          </div>

          <div className="column2">
            <div className="row">

              <div className="column3">
              <div className="ImgItems">
                <img src={Product4} alt="product" loading="lazy" />
                <div className="overlay">
                  <p className="name">Pants</p>
                  <p className="count">200 Product</p>
                </div>
              </div>

                <div className="ImgItems">
                  <img src={Product3} alt="product" loading="lazy" />
                  <div className="overlay">
                    <p className="name">Shirt</p>
                    <p className="count">320 Product</p>
                  </div>
                </div>
              </div>

              <div className="column4">
                <div className="ImgItems">
                  <img src={Product1} alt="product" loading="lazy" />
                  <div className="overlay">
                    <p className="name">Coat</p>
                    <p className="count">520 Product</p>
                  </div>
                </div>

                <div className="ImgItems">
                  <img src={Product2} alt="product" loading="lazy" />
                  <div className="overlay">
                    <p className="name">Jacket</p>
                    <p className="count">103 Product</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </StyledNewAndPopular>
  );
};
export default NewAndPopularStyles;
