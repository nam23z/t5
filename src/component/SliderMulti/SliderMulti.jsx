import Slider from "react-slick";
import Container from "../Container/Container";
import { styled } from "styled-components";
import {ReactComponent as NextArrow} from "../../assets/icons/nextArrow.svg";
import {ReactComponent as PrevArrow} from "../../assets/icons/prevArrow.svg"
import Product from "../Product/Product";
import ImgProduct from "../../assets/imgProducts/image-product.svg";
import ImgProduct1 from "../../assets/imgProducts/image-product-1.svg";
import ImgProduct2 from "../../assets/imgProducts/image-product-2.svg";
import ImgProduct3 from "../../assets/imgProducts/image-product-3.svg";
import ImgProduct4 from "../../assets/imgProducts/image-product-4.svg";
import ImgProduct5 from "../../assets/imgProducts/image-product-5.svg";
import ImgProduct6 from "../../assets/imgProducts/image-product-6.svg";
import ImgProduct7 from "../../assets/imgProducts/image-product-7.svg";
const StyledSliderMulti = styled.div`
    position: relative;
    margin-top: 35px;
    width: 100%;
    .overlay{
      bottom: 0;
    }
    .bottomP{
      width: 92%;
    }
    .slick-list{
      width: 102%;
    }
    .nextArrow{
      position: absolute;
      top: 36%;
      right: 1%;
    }
    .prevArrow{
      position: absolute;
      top: 36%;
      left: 1%;
      z-index: 2;
    }
`

const SampleNextArrow = ({onClick}) => {
  return (
    <div className="nextArrow" onClick={onClick}>
      <NextArrow/>
    </div>
  );
}

const SamplePrevArrow = ({onClick}) => {
  return (
    <div className="prevArrow" onClick={onClick}>
      <PrevArrow/>
    </div>
  );
}
const SliderMulti = ({children}) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
      <Container>
        <StyledSliderMulti>
            <Slider className="slide" {...settings}>
            <Product
              image={ImgProduct3}
              name={"Nike Repel Miler"}
              cate={"Dress"}
              price={63.85}
            />
            <Product
              image={ImgProduct4}
              name={"Nike Repel Miler"}
              cate={"Bag"}
              price={130.0}
            />
            <Product
              image={ImgProduct5}
              name={"Nike Repel Miler"}
              cate={"Scarf"}
              price={53.0}
            />
          <Product
            image={ImgProduct}
            name={"Nike Repel Miler"}
            cate={"Dress"}
            price={364.0}
            tag="SALE"
            sale={155.0}
            tagColor={"#1E2832"}
          />
          <Product
            image={ImgProduct7}
            name={"Nike Repel Miler"}
            cate={"Dress"}
            price={236.0}
            tag="HOT"
            tagColor={"#FF6F61"}
          />
            <Product
              image={ImgProduct6}
              name={"Nike Repel Miler"}
              cate={"Shoe"}
              price={220.0}
              tag="SALE"
              sale={198.0}
              tagColor={"#1E2832"}
            />
            <Product
              image={ImgProduct1}
              name={"Nike Repel Miler"}
              cate={"Dress"}
              price={120.5}
            />
          <Product
            image={ImgProduct2}
            name={"Nike Repel Miler"}
            cate={"Glasses"}
            price={160.0}
          />
            </Slider>
        </StyledSliderMulti>
      </Container>
    )
}
export default SliderMulti;