import { styled } from "styled-components";
import Container from "../Container/Container";
import Product from "../Product/Product";
import ImgProduct from "../../assets/imgProducts/image-product.svg";
import ImgProduct1 from "../../assets/imgProducts/image-product-1.svg";
import ImgProduct2 from "../../assets/imgProducts/image-product-2.svg";
import ImgProduct3 from "../../assets/imgProducts/image-product-3.svg";
import ImgProduct4 from "../../assets/imgProducts/image-product-4.svg";
import ImgProduct5 from "../../assets/imgProducts/image-product-5.svg";
import ImgProduct6 from "../../assets/imgProducts/image-product-6.svg";
import ImgProduct7 from "../../assets/imgProducts/image-product-7.svg";

const StyledGridFour = styled.div`
  margin-top: 35px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
`;

const fakedata = [
  {
    image: ImgProduct,
    name: "Nike Repel Miler",
    cate: "Dress",
    price: 63.85,
    tag: "",
    sale: "",
    tagColor:""
  },
  {
    image: ImgProduct4,
    name:"Nike Repel Miler",
    cate:"Bag",
    price:130.0,
    tag: "",
    sale: "",
    tagColor:""
  },
  {
    image:ImgProduct5,
    name: "Nike Repel Miler",
    cate: "Scarf",
    price: 53.0,
    tag: "",
    sale: "",
    tagColor: ""
  },
  {
    image:ImgProduct3,
    name:"Nike Repel Miler",
    cate:"Dress",
    price:364.0,
    tag:"SALE",
    sale:155.0,
    tagColor:"#1E2832",
  },
  {
    image:ImgProduct7,
    name:"Nike Repel Miler",
    cate:"Dress",
    price:236.0,
    tag:"HOT",
    sale: "",
    tagColor:"#FF6F61",
  },
  {
    image:ImgProduct6,
    name:"Nike Repel Miler",
    cate:"Shoe",
    price:220.0,
    tag:"SALE",
    sale:198.0,
    tagColor:"#1E2832",
  },
  {
    image:ImgProduct1,
    name:"Nike Repel Miler",
    cate:"Dress",
    price:120.5,
    tag: "",
    sale: "",
    tagColor:""
  },
  {
    image:ImgProduct2,
    name:"Nike Repel Miler",
    cate:"Glasses",
    price:160.0,
    tag: "",
    sale: "",
    tagColor:""
  }
];
const GridFour = () => {
  return (
    <Container>
      <StyledGridFour>
        {fakedata.map((d) => {
          return(
            <Product
            image={d.image}
            name={d.name}
            cate={d.cate}
            price={d.price}
            tag={d.tag}
            sale={d.sale}
            tagColor={d.tagColor}
            ></Product>
          )
          })}
      </StyledGridFour>
    </Container>
  );
};
export default GridFour;
