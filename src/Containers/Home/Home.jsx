import { styled } from "styled-components";
import Header from "../../component/Header/Header";
import Brand from "../../component/Brand/Brand";
import NewAndPopularStyles from "../../component/NewAndPopularStyles/NewAndPopularStyles";
import BannerContent from "../../component/BannerContent";
import NewsLetter from "../../component/NewsLetter/NewsLetter";
import BestSeller from "../../component/BestSeller/BestSeller";
import ContactInstagram from "../../component/ContactInstagram/ContactInstagram";
import Footer from "../../component/Footer/Footer";

const StyledHome = styled.div`
width: 100%;
`
const Home = () => {
    return(
        <StyledHome>
            <Header></Header>
            <Brand></Brand>
            <NewAndPopularStyles></NewAndPopularStyles>
            <NewsLetter></NewsLetter>
            <BannerContent></BannerContent>
            <BestSeller></BestSeller>
            <ContactInstagram></ContactInstagram>
            <Footer></Footer>
        </StyledHome>
    )
}
export default Home;