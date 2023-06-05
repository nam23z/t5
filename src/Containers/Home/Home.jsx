import { styled } from "styled-components";
import Header from "../../component/Header/Header";
import Brand from "../../component/Brand/Brand";
import NewAndPopularStyles from "../../component/NewAndPopularStyles/NewAndPopularStyles";
import AllProduct from "../../component/AllProducts";

const StyledHome = styled.div`
width: 100%;
`
const Home = () => {
    return(
        <StyledHome>
            <Header></Header>
            <Brand></Brand>
            <NewAndPopularStyles></NewAndPopularStyles>
            <AllProduct></AllProduct>
        </StyledHome>
    )
}
export default Home;