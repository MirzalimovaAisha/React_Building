import React from "react";
import {
  BackLeft,
  Container5,
  Imgs,
  Line,
  Sec5RightText,
  Sec5Title,
  Sec5Top,
  Section5Container,
  YellowLine,
} from "./style";
import Imgs1 from "../assets/sec5_img.png"

const Section5 = () => {
  return (
    <Section5Container>
      <Container5>
        <Sec5Top>
          <div>
            <Sec5Title>Our Gallery</Sec5Title>
            <YellowLine style={{fontSize:"16px"}}>
              <Line></Line>
              <div>Quality design at the fairest price</div>
            </YellowLine>
          </div>
          <Sec5RightText>
            <div>Lorem ipsum dolor sit amet consect </div>
            <div>etur adipiscing elit sed do eiusmo. </div>
            <div>There are many variations.</div>
          </Sec5RightText>
        </Sec5Top>
        <Imgs src={Imgs1}/>
      </Container5>
      <BackLeft style={{ height: "816px", width: "1520px" }}></BackLeft>
    </Section5Container>
  );
};

export default Section5;
