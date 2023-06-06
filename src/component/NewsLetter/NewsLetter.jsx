import MenuContent from "../MenuContent/MenuContent";
import { ReactComponent as IconFilter } from "../../assets/icons/Filter.svg";
import Container from "../Container/Container";
import {AllProduct} from "../../component/AllProducts";
const NewsLetter = () => {
  return (
    <Container>
      <MenuContent parent={"newsletter"} title={"or subscribe to the newsletter"}>
        <IconFilter />
        <span>Filter</span>
      </MenuContent>
      <AllProduct></AllProduct>
    </Container>
  );
};
export default NewsLetter;
