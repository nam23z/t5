import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  border: ${props => props.boderColor ? `1px solid ${props.boderColor}` : "none"};
  border-radius: ${props => props.borderRadius};
  background: ${props => props.bgColor};
  font-weight: 500;
  line-height: 21px;
  color: ${props => props.textColor};
  font-family: ${props => props.fontFami};
  padding: ${props => props.padding};
  cursor: pointer;
  img {
    margin-right: 8px;
  }
`;
export const Button = ({ width, height, textColor, fontFami, bgColor, boderColor, padding, fontSize, borderRadius, children, ...rest }) => {
  return <StyledButton 
    width={width}
    height={height}
    textColor={textColor}
    fontFami={fontFami}
    bgColor={bgColor}
    boderColor={boderColor}
    fontSize={fontSize}
    borderRadius={borderRadius}
    padding={padding}
    {...rest}
    >
      {children}
    </StyledButton>;
 }
 Button.defaultProps = {
  bgColor: '#1E2832',
  textColor: '#FFFFFF',
  width: "223px",
  height: "72px",
  padding:"0"
};