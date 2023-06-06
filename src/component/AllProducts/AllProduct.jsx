import * as React from "react";
import Container from "../Container/Container";
import Product from '../Product/Product';
import ImgProduct from '../../assets/imgProducts/image-product.svg';
import ImgProduct1 from '../../assets/imgProducts/image-product-1.svg';
import ImgProduct2 from '../../assets/imgProducts/image-product-2.svg';
import ImgProduct3 from '../../assets/imgProducts/image-product-3.svg';
import ImgProduct4 from '../../assets/imgProducts/image-product-4.svg';
import ImgProduct5 from '../../assets/imgProducts/image-product-5.svg';
import ImgProduct6 from '../../assets/imgProducts/image-product-6.svg';
import ImgProduct7 from '../../assets/imgProducts/image-product-7.svg';
import GridFour from "../GridFour";

export const AllProduct = () => {
  return (
    <Container>
      <GridFour>
        <Product image={ImgProduct3} name={"Nike Repel Miler"} cate={"Dress"} price={63.85}/>
        <Product image={ImgProduct4} name={"Nike Repel Miler"} cate={"Bag"} price={130.00}/>
        <Product image={ImgProduct5} name={"Nike Repel Miler"} cate={"Scarf"} price={53.00}/>
        <Product image={ImgProduct} name={"Nike Repel Miler"} cate={"Dress"} price={364.00} tag="SALE" sale={155.00} tagColor={"#1E2832"}/>
        <Product image={ImgProduct7} name={"Nike Repel Miler"} cate={"Dress"} price={236.00} tag="HOT" tagColor={"#FF6F61"}/>
        <Product image={ImgProduct6} name={"Nike Repel Miler"} cate={"Shoe"} price={220.00} tag="SALE" sale={198.00} tagColor={"#1E2832"}/>
        <Product image={ImgProduct1} name={"Nike Repel Miler"} cate={"Dress"} price={120.50}/>
        <Product image={ImgProduct2} name={"Nike Repel Miler"} cate={"Glasses"} price={160.00}/>
      </GridFour>
    </Container>
  );
};
