import React from "react";
import { Line, Sec1Left, Sec1Right, SecSubTitle, SecTitle, YellowLine } from "./style";

const Section1 = () => {
  return (
    <div style={{display: "flex", marginTop: "200px", justifyContent: "center", gap: "195px"}}>
      <Sec1Left>
        <SecTitle>Since we Started work in 1900</SecTitle>
        <YellowLine style={{ fontSize: "16px" }}>
          <Line></Line>
          Quality design at the fairest price
        </YellowLine>
      </Sec1Left>
      <Sec1Right>
        <SecSubTitle>
          <div>
            We have worked on some of the stunning architectural marvels within
            industries like hotels, residential buildings, offices, commercial
            buildings, food & beverage and made them great successes.
          </div>
          <div>
            We have worked on some of the stunning architectural marvels within
            industries like hotels, residential buildings, offices, commercial
            buildings, food & beverage and made them great successes.
          </div>
        </SecSubTitle>
        <YellowLine style={{padding:"0px 25px"}}>
            Lorem ipsum
        </YellowLine>
      </Sec1Right>
    </div>
  );
};

export default Section1;
