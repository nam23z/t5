import MenuContent from "../MenuContent/MenuContent";
import Container from "../Container/Container";
// import { AllProductSlide } from "../AllProducts/AllProductSlide";
import SliderMulti from '../SliderMulti/SliderMulti';

const BestSeller = () => {
  return (
    <Container>
      <MenuContent parent={"bestsellers"} title={"best sellers"}>
        <span>Show All</span>
      </MenuContent>
      <SliderMulti/>
    </Container>
  );
};
export default BestSeller;
