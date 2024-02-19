import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--white);
  overflow: hidden;
`;

const TextContainer = styled.p`
  width: 100%;
  height: 50vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  span {
    font-size: var(--fontBig);
    width: 90%;
    font-weight: 600;
    text-transform: capitalize;
  }
  color: var(--dark);
`;
const TextContainer2 = styled.p`
  width: 100%;
  height: 50vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  span {
    width: 80%;
    font-weight: 600;
    text-transform: capitalize;

    font-size: var(--fontxxxl);
  }
  color: var(--dark);
`;
const DesignSection = () => {
  const container = useRef(null);
  const textOne = useRef(null);
  const textTwo = useRef(null);
 
  useLayoutEffect(() => {
let t1 = gsap.timeline({
    scrollTrigger:{
        trigger: container.current,
        start:"top-=500 top",
        end:" bottom top",
        // markers:true,
        scrub: true,
    }
}).fromTo(textOne.current, {x:0}, {x:"10%"}, "key1").fromTo(textTwo.current, {x:0}, {x:"-10%"}, "key1")
  
    return () => {
        if(t1) t1.kill()
     
    };
  }, [])
  return (
    <Section ref={container}>
      <TextContainer ref={textOne}>
        <span>Flaw-less design with stong durability.</span>
      </TextContainer>
      <TextContainer2 ref={textTwo}>
        <span>Flat-edge design with toughhest smartphone.</span>
      </TextContainer2>
    </Section>
  );
};

export default DesignSection;
