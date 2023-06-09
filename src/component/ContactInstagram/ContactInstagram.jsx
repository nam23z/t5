import Container from "../Container/Container";
import { styled } from "styled-components";
import ImgInsta1 from '../../assets/imgContactInsta/image-product-12.svg';
import ImgInsta2 from '../../assets/imgContactInsta/image-product-11.svg';
import ImgInsta3 from '../../assets/imgContactInsta/image-product-9.svg';
import ImgInsta4 from '../../assets/imgContactInsta/image-product-13.svg';
import ImgInsta5 from '../../assets/imgContactInsta/image-product-10.svg';
import ImgInsta6 from '../../assets/imgContactInsta/image-product-8.svg';
import {ReactComponent as Insta} from '../../assets/icons/instaWhite.svg';

const StyledContact = styled.div`
width: 100%;
background-color: #F0F0F0;
  h2 {
      text-align: center;
      font-family: 'Roboto';
      font-weight: 500;
      font-size: 50px;
      line-height: 59px;
      text-transform: capitalize;
      padding-top: 100px;
      padding-bottom: 60px;
  }
  h4{
      text-align: center;
      font-family: 'Roboto';
      font-weight: 500;
      font-size: 28px;
      line-height: 33px;
      padding-top: 70px;
    padding-bottom: 130px;
    color: #FF6F61;
  }
  .contactIsta{
    width: 100%;
    display: flex;
    gap: 24px;
    .imgI{
      width: 100%;
      position: relative;
      img{
        opacity: 1;
        display: block;
        height: auto;
        width: 100%;
        transition: 0.5s ease;
        backface-visibility: hidden;
      }
      .middle{
        transition: 0.5s ease;
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #0A183D;
        svg{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          text-align: center;
        }
      }
    }
    .imgI:hover .middle{
      opacity: 0.3;
    }
  }

`;
const ContactInstagram = () => {
  return (
    <StyledContact>
      <Container>
        <h2>follow products and discounts on instagram</h2>
        <div className="contactIsta">
            <div className="imgI">
                <img src={ImgInsta1} alt="img" />
                <div className="middle">
                    <Insta/>
                </div>
            </div>
            <div className="imgI">
                <img src={ImgInsta2} alt="img" />
                <div className="middle">
                    <Insta/>
                </div>
            </div>
            <div className="imgI">
                <img src={ImgInsta3} alt="img" />
                <div className="middle">
                    <Insta/>
                </div>
            </div>
            <div className="imgI">
                <img src={ImgInsta4} alt="img" />
                <div className="middle">
                    <Insta/>
                </div>
            </div>
            <div className="imgI">
                <img src={ImgInsta5} alt="img" />
                <div className="middle">
                    <Insta/>
                </div>
            </div>
            <div className="imgI">
                <img src={ImgInsta6} alt="img" />
                <div className="middle">
                    <Insta/>
                </div>
            </div>
        </div>
        <h4>@Lisa.Official</h4>
      </Container>
    </StyledContact>
  );
};
export default ContactInstagram;
