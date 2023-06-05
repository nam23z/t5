import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MUIContainer from '@mui/material/Container';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 1320px;
  margin: 0 auto;
  .MainContainer{
    padding: 0;
  }
`
const Container = ({children}) => {
  return (
    <StyledContainer>
      <CssBaseline />
      <MUIContainer className='MainContainer' maxWidth={"100%"}>
        <Box sx={{ height: 'auto' }}>
          {children}
        </Box>
      </MUIContainer>
    </StyledContainer>
  );
}
export default Container;