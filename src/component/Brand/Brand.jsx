import Container from "../Container/Container";
import GraphicStudio from '../../assets/Brand/brand-1.svg';
import TravelLookBook from '../../assets/Brand/brand-2.svg';
import GoldenStudio from '../../assets/Brand/brand-3.svg';
import FurnitureDesign from '../../assets/Brand/brand-4.svg';
import SSalvaArtDirector from '../../assets/Brand/brand-5.svg';
import { styled } from "styled-components";

const StyledBrand = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 90px;
`
const Brand = () => {
    return(
        <Container>
            <StyledBrand>
                <img src={GraphicStudio} alt="grps" />
                <img src={SSalvaArtDirector} alt="ssvA" />
                <img src={GoldenStudio} alt="GdS" />
                <img src={FurnitureDesign} alt="FntD" />
                <img src={TravelLookBook} alt="TvLB" />
            </StyledBrand>
        </Container>
    );
}
export default Brand;