import * as React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 1320px;
  margin: 0 auto;
`
const Container = ({children}) => {
  return (
    <StyledContainer>
          {children}
    </StyledContainer>
  );
}
export default Container;