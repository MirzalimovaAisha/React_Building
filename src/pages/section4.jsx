import React from "react";
import {
  ImgBox,
  ImgItemText,
  ImgItems,
  Imgs,
  SecTitle2,
  Section4Container,
} from "./style";
import Img1 from "../assets/sec4_Img1.png";
import Img2 from "../assets/sec4_Img2.png";
import Img3 from "../assets/sec4_img3.png";

const Section4 = () => {
  return (
    <Section4Container>
      <SecTitle2 $title2>Our Latest Projects</SecTitle2>

      <ImgBox>
        <ImgItems>
          <Imgs src={Img1} />
          <ImgItemText>Lawyes Hub kenya</ImgItemText>
        </ImgItems>

        <ImgItems>
          <Imgs src={Img2} />
          <ImgItemText style={{padding:"12px 90px 12px 8px"}}>E.A.C Arusha</ImgItemText>
        </ImgItems>

        <ImgItems>
          <Imgs src={Img3} />
          <ImgItemText>Transnational Bank</ImgItemText>
        </ImgItems>
      </ImgBox>
    </Section4Container>
  );
};

export default Section4;
