import { Environment, OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import styled from "styled-components";
import Model3 from "../components/Scene3";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: var(--white);
  overflow: hidden;
`;

const Phone = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: grab;
`;

const Colors = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position:absolute;
  left:35%;
  top:50%;
  transform: translate(-50%, -50%);
`;
const Color = styled.l1`
list-style: none;
width: 1.5rem;
height: 1.5rem;
cursor: pointer;

border-radius: 50%;
background-color: ${(props) => props.color};
`

const PricingSection = () => {
  return (
    <Section>
      <Phone>
        <Canvas camera={{ fov: 14 }}>
          <ambientLight intensity={1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
            <Model3 />
          </Suspense>

          <Environment preset="night" />

          <OrbitControls enableZoom={false} />
        </Canvas>

        <Colors>
        <Color/>
        </Colors>
      </Phone>
    </Section>
  );
};

export default PricingSection;
