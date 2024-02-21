import { Environment, OrbitControls } from '@react-three/drei'
import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import styled from 'styled-components'
import Model3 from "../components/Scene3";


const Section  = styled.section`
width:100vw;
height:100vh;
position:relative;
z-index:1;
background-color:var(--white);
overflow:hidden;

`

const Phone = styled.div`
width:100%;
height:70%;
display:flex;
justify-content: center;
align-items:center;
position: relative;
cursor:grab;
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
        </Phone>
    </Section>
  )
}

export default PricingSection