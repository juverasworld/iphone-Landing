import React from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
const Container = styled.div`
width:100vw;
height:100vh;

position:fixed;
top:0;
z-index: 1;
background-color:transparent;

`


const PhoneModel = () => {
  return (
   <Container>
    <Canvas>

    </Canvas>
   </Container>
  )
}

export default PhoneModel