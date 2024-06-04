import React from "react";
import {
    BackLeft,
    BackRight,
  Sec2Down,
  Sec2Img,
  Sec2Texts,
  Sec2Up,
  SecSubTitle,
  SecTitle,
  YellowButton,
} from "./style";
import Sec2UpImg from "../assets/sec2Left.png";
import Sec2DownImg from "../assets/sec2Right.png";

const Section2 = () => {
  return (
    <div style={{ marginTop: "200px" }}>
      <Sec2Up>
        <BackRight></BackRight>
        <div style={{ display: "flex", justifyContent:"center" }}>
          <div style={{display:"flex", position:"absolute", gap:"128px", bottom:"0px"}}>
            <Sec2Img src={Sec2UpImg} />
            <Sec2Texts>
              <SecTitle>Aesthetically pleasing.</SecTitle>
              <SecSubTitle>
                We have worked on some of the stunning architectural marvels
                within industries like hotels, residential buildings, offices,
                commercial buildings, food & beverage and made them great
                successes.
              </SecSubTitle>

              <YellowButton>Learn More</YellowButton>
            </Sec2Texts>
          </div>
        </div>
      </Sec2Up>
      <Sec2Down>
        <BackLeft></BackLeft>
        <div style={{ display: "flex", justifyContent:"center" }}>
          <div style={{display:"flex", position:"absolute", gap:"50px"}}>
            <Sec2Texts style={{padding:"76px 0px"}}>
              <SecTitle>Great work Ethic.</SecTitle>
              <SecSubTitle style={{width:"531px",}}>
                We have worked on some of the stunning architectural marvels
                within industries like hotels, residential buildings, offices,
                commercial buildings, food & beverage and made them great
                successes.
              </SecSubTitle>

              <YellowButton>Learn More</YellowButton>
            </Sec2Texts>
            <Sec2Img src={Sec2DownImg} />
          </div>
        </div>
      </Sec2Down>
    </div>
  );
};

export default Section2;
