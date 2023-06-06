import MenuContent from "../MenuContent/MenuContent";
import Container from "../Container/Container";
import { AllProductSlide } from "../AllProducts/AllProductSlide";
const BestSeller = () => {
  return (
    <Container>
      <MenuContent parent={"bestsellers"} title={"best sellers"}>
        <span>Show All</span>
      </MenuContent>
      <AllProductSlide></AllProductSlide>
    </Container>
  );
};
export default BestSeller;
