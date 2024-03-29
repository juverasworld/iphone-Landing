import React, { useLayoutEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled, { keyframes } from "styled-components";
import gsap from "gsap";
import { useRef } from "react";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--dark);
  color: var(--white);
`;
const moveUp = keyframes`
100%{
  transform:translateY(0);
}
`;

const Text = styled.p`
  width: 50%;
  font-size: var(--fontlg);
  height: var(--fontmd);
  position: relative;
  height: var(fontmd);
  overflow: hidden;

  span {
    position: absolute;
    transform: translateY(3rem);
    animation-name: ${moveUp};
    animation-duration: 2.5s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    font-family: var(--fontL);
    animation-delay: ${(props) => props.delay};
    font-weight: 300;
    background-image: linear-gradient(-45deg, var(--gradient));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .author {
    width: 100%;
    text-align: end;
    background-image: linear-gradient(-180deg, var(--gradient));
  }
`;
const Quotes = () => {

  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null)

  useLayoutEffect(() => {
    let Elem = sectionRef.current;

  let trigger =  ScrollTrigger.create({
      trigger: Elem,
      start: "top top",
      // end: "bottom-=100 center",
      pin: true,
      pinSpacing:false,
      // markers:true,
      // endTrigger: "#otherID",
      // end: "bottom 50%+=100px",
      // onToggle: (self) => console.log("toggled, isActive:", self.isActive),
      // onUpdate: (self) => {
      //   console.log(
      //     "progress",
      //     self.progress.toFixed(3),
      //     "direction",
      //     self.direction,
      //     "velocity",
      //     self.getVelocity()
      //   );
      // },
    });
    return() =>{
      if(trigger) trigger.kill();
    }
  }, []);

  return (
    <Section ref={sectionRef}>
      <TextContainer>
        <Text delay="0s">
          <span> &nbsp; &#8220; Gee you basically learn by doing</span>
        </Text>
        <Text delay="0.4s">
          <span> &nbsp; &nbsp; &nbsp; Since we learn by doing, </span>
        </Text>
        <Text delay="0.8s">
          <span>
            {" "}
            &nbsp; &nbsp; &nbsp; Let's do the very best that we can do{" "}
          </span>
        </Text>
        <Text delay="1.2s">
          <span> &nbsp; &nbsp; &nbsp;even when we cannot see it &#8221;</span>
        </Text>
        <Text delay="1.6s">
          <span className="author"> &#x23AF; Your's Vee</span>
        </Text>
      </TextContainer>
    </Section>
  );
};

export default Quotes;
