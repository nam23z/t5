import Slider from "react-slick";
import { styled } from "styled-components";
import {ReactComponent as NextArrow} from "../../assets/icons/nextArrow.svg";
import {ReactComponent as PrevArrow} from "../../assets/icons/prevArrow.svg"

const StyledSliderMulti = styled.div`
    position: relative;
    margin-top: 35px;
    width: 100%;
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
        <StyledSliderMulti>
            <Slider className="slide" {...settings}>
                {children}
            </Slider>
        </StyledSliderMulti>
    )
}
export default SliderMulti;