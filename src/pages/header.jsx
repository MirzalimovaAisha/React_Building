import React from "react";
import headerImg from "../assets/headerImg.png";
import Arrow_right from "../assets/arrow_right.svg";
import {
    ArrowImg,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderRightText,
  HeaderTitle,
  ImgWrapper,
  Line,
  SubHeading,
  YellowLine,
} from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderTitle>
          The construction kings building up great things
        </HeaderTitle>

        <SubHeading>
          Buildmax Limited is a professional building, renovation and
          refurbishment company. We are part of the Nairobi-based Talisman
          Capital Group.
        </SubHeading>
        <YellowLine>
          <Line></Line>
          <p>Read More</p>
        </YellowLine>
      </HeaderLeft>

      <HeaderRight>
        <ImgWrapper src={headerImg} />
        <HeaderRightText>Our Projects
            <ArrowImg src={Arrow_right}/>
        </HeaderRightText>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
