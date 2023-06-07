import MenuContent from "../MenuContent/MenuContent";
import { ReactComponent as IconFilter } from "../../assets/icons/Filter.svg";
import Container from "../Container/Container";
const NewsLetter = ({children}) => {
  return (
    <Container>
      <MenuContent parent={"newsletter"} title={"or subscribe to the newsletter"}>
        <IconFilter />
        <span>Filter</span>
      </MenuContent>
      {children}
    </Container>
  );
};
export default NewsLetter;
