import React from 'react'
import styled, { keyframes } from 'styled-components'


const Section = styled.section`
width:100vw;
height:100vh;
position:relative;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`

const TextContainer = styled.div`
width:100vw;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color: var(--dark );
color:var(--white);

`
const moveUp = keyframes`
100%{
  transform:translateY(0);
}
`

const Text = styled.p`
width:50%;
font-size: var(--fontlg);
height: var(--fontmd);
position: relative;
height: var(fontmd);
overflow:hidden;

span{
 
  position:absolute;
  transform:translateY(3rem);
  animation-name: ${moveUp};
  animation-duration:2.5s;
  animation-timing-function:ease;
  animation-fill-mode:forwards;
  font-family: var(--fontL);
}
`
const Quotes = () => {
  return (
    <Section>
<TextContainer>
<Text><span>Line 1</span></Text>
<Text><span>Line 2</span></Text>
<Text><span>Line 3</span></Text>
<Text><span>Line 4</span></Text>
<Text><span>Line 5</span></Text>
      </TextContainer>  
</Section>
  )
}

export default Quotes