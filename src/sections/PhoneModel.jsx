import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../assets/3D-Model/scene";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;  
`;

const PhoneModel = () => {
  return (
    <Container>
      <Canvas>
        <ambientLight intensity={1.25}/>
        <directionalLight position={[1,0,0]}/>
        <Model/>

        <OrbitControls />
      </Canvas>
    </Container>
  );
};

export default PhoneModel;
