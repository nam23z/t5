import { styled } from "styled-components";
import Banner from '../../assets/Banner/banner1.svg';
import ZaraLogo1 from '../../assets/Banner/Zara_Logo1.svg';
import ZaraLogo2 from '../../assets/Banner/Zara_Logo2.svg';
import {Button} from '../../component/Button/Button';
const StyledBannerContent = styled.div`
    position: relative;
    background: url(${Banner}) center center / 100% no-repeat;
    width: 100%;
    height: 776px;
    text-align: right;
    font-family: 'Roboto';
    .logo1{
        padding-top: 50px;
    }
    .text{
        position: absolute;
        top: 28%;
        right: 17%;
        text-align: left;
        width: 504px;
        p{
            text-transform: capitalize;
            color: #FF6F61;
            font-size: 26px;
            font-weight: 400;
            line-height: 40px;
            padding: 55px 0;
        }
    }
    margin-top: 116px;
`
const BannerContent = () => {
    return(
        <StyledBannerContent>
            <img className="logo1" src={ZaraLogo1} alt="zaralogo1" />
            <div className="text">
                <img src={ZaraLogo2} alt="zaralogo2" />
                <p>lustrous yet understated. the new evening wear collection exclusively offered at the reopened giorgio armani boutique in los angeles.</p>
                <Button
                    bgColor={"#FFFFFF"}
                    textColor={"#1E2832"}
                    fontSize={"29px"}
                    fontFami={"Roboto"}
                    fontWei={400}
                    lineHei={"34px"}
                >
                    See Collection
                </Button>
            </div>
        </StyledBannerContent>
    )
}
export default BannerContent;