import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  border: ${props => props.boderColor ? `1px solid ${props.boderColor}` : "none"};
  border-radius: ${props => props.borderRadius};
  background: ${props => props.bgColor};
  color: ${props => props.textColor};
  font-family: ${props => props.fontFami};
  font-size: ${props => props.fontSize};
  padding: ${props => props.padding};
  font-weight: ${props => props.fontWei};
  line-height: ${props => props.lineHei};
  cursor: pointer;
  img {
    margin-right: 8px;
  }
`;
export const Button = ({ width, height, lineHei, textColor, fontFami,fontWei, bgColor, boderColor, padding, fontSize, borderRadius, children, ...rest }) => {
  return <StyledButton 
    width={width}
    height={height}
    lineHei={lineHei}
    textColor={textColor}
    fontFami={fontFami}
    fontWei={fontWei}
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