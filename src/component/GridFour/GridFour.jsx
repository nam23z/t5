import { styled } from "styled-components";

const StyledGridFour = styled.div`
  margin-top: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;
const GridFour = ({ children }) => {
  return <StyledGridFour>{children}</StyledGridFour>;
};
export default GridFour;
