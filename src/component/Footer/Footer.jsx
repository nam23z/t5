import { styled } from "styled-components";
import Container from "../Container/Container";
import Fb from "../../assets/icons/fb.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Linked from "../../assets/icons/linked.svg";
import Insta from "../../assets/icons/insta.svg";
import { ReactComponent as TopArrow } from "../../assets/icons/topArrow.svg";
import IconsPayment from "../../assets/icons/icons_payment.svg";

const StyledFooter = styled.div`
  .topFooter {
    display: flex;
    justify-content: space-between;
    padding-bottom: 90px;
    padding-top: 180px;
  }
  h6 {
    font-family: "AmstelvarAlpha";
    font-size: 28px;
    line-height: 34px;
    font-weight: 400;
    margin-top: 6px;
  }
  .ct {
    width: 392px;
  }
  .botIcon {
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 25px;
      height: 25px;
    }
  }
  .titl td {
    width: 280px;
    text-transform: uppercase;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
  }
  td {
    text-transform: capitalize;
    font-family: "Open Sans";
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
  }
  .botFooter {
    background-color: #1e2832;
    color: #ffffff;
    .botFContent {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .CtRight {
        cursor: pointer;
        width: 9%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div className="topFooter">
          <div className="ct">
            <h6>Lisa</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="botIcon">
              <img src={Fb} alt="fb" />

              <img src={Twitter} alt="twt" />

              <img src={Linked} alt="in" />

              <img src={Insta} alt="insta" />
            </div>
          </div>
          <table>
            <tr className="titl">
              <td>catalog</td>
              <td>about us</td>
              <td>customer services</td>
            </tr>
            <tr>
              <td>necklaces</td>
              <td>our producers</td>
              <td>contact us</td>
            </tr>
            <tr>
              <td>hoodies</td>
              <td>sitemap</td>
              <td>track your order</td>
            </tr>
            <tr>
              <td>jewelry box</td>
              <td>FAQ</td>
              <td>product care & repair</td>
            </tr>
            <tr>
              <td>t-shirt</td>
              <td>about us</td>
              <td>book an appointment</td>
            </tr>
            <tr>
              <td>jacket</td>
              <td>term & conditions</td>
              <td>shipping & returns</td>
            </tr>
          </table>
        </div>
      </Container>
      <div className="botFooter">
        <Container>
          <div className="botFContent">
            <div className="CtLeft">
              <p>© 2023 LISA , Inc.</p>
            </div>
            <div className="CtCenter">
              <img src={IconsPayment} alt="iconsPayment" />
            </div>
            <div
              className="CtRight"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <p>Scroll to top</p>
              <TopArrow />
            </div>
          </div>
        </Container>
      </div>
    </StyledFooter>
  );
};
export default Footer;
