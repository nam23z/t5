import * as React from "react";
import Container from "../Container/Container";
import Product from '../Product/Product';
import { styled } from "styled-components";
import { ReactComponent as IconFilter} from '../../assets/icons/Filter.svg';
import MenuContent from "../MenuContent/MenuContent";
import ImgProduct from '../../assets/imgProducts/image-product.svg';
import ImgProduct1 from '../../assets/imgProducts/image-product-1.svg';
import ImgProduct2 from '../../assets/imgProducts/image-product-2.svg';
import ImgProduct3 from '../../assets/imgProducts/image-product-3.svg';
import ImgProduct4 from '../../assets/imgProducts/image-product-4.svg';
import ImgProduct5 from '../../assets/imgProducts/image-product-5.svg';
import ImgProduct6 from '../../assets/imgProducts/image-product-6.svg';
import ImgProduct7 from '../../assets/imgProducts/image-product-7.svg';

const StyledAllProduct = styled.div`
  margin-top: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;
const AllProduct = () => {
  return (
    <Container>
        <MenuContent>
          <IconFilter/>
        <span>Filter</span>
        </MenuContent>
      <StyledAllProduct>
        <Product image={ImgProduct3} name={"Nike Repel Miler"} cate={"Dress"} price={63.85}/>
        <Product image={ImgProduct4} name={"Nike Repel Miler"} cate={"Dress"} price={130.00}/>
        <Product image={ImgProduct5} name={"Nike Repel Miler"} cate={"Dress"} price={53.00}/>
        <Product image={ImgProduct} name={"Nike Repel Miler"} cate={"Dress"} price={120.50} tag="SALE" tagColor={"#1E2832"}/>
        <Product image={ImgProduct7} name={"Nike Repel Miler"} cate={"Dress"} price={120.50} tag={"HOT"} tagColor={"#FF6F61"}/>
        <Product image={ImgProduct6} name={"Nike Repel Miler"} cate={"Dress"} price={120.50} tag="SALE" tagColor={"#1E2832"}/>
        <Product image={ImgProduct1} name={"Nike Repel Miler"} cate={"Dress"} price={120.50}/>
        <Product image={ImgProduct2} name={"Nike Repel Miler"} cate={"Dress"} price={120.50}/>
      </StyledAllProduct>
    </Container>
  );
};
export default AllProduct;
