import React from "react";
import {
  Button,
  FooterBottom,
  FooterBox,
  FooterContainer,
  FooterIcons,
  FooterItems,
  FooterMenu,
  FooterTexts,
  FooterTitle,
  IconTexts,
  Icons,
  Imgs,
  ItemsButton,
  Line,
} from "./style";

import FooterIcon1 from "../assets/facebook_icon.svg";
import FooterIcon2 from "../assets/twitter_icon.svg";
import FooterIcon3 from "../assets/instagramm_icon.svg";
import FooterIcon4 from "../assets/videocam_icon.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterBox>
        <FooterItems style={{ alignItems: "center", gap: "19px" }}>
          <Line></Line>
          <div>
            <FooterTitle>About the company</FooterTitle>
            <FooterTexts>
              Buildmax Limited is a professional building, renovation and
              refurbishment company. We are part of the Nairobi-based Talisman
              Capital Group.
            </FooterTexts>
          </div>
        </FooterItems>
        <FooterItems>
          <div>
            <FooterTitle>Newsletter</FooterTitle>
            <FooterTexts>Stay updated with our lates offers</FooterTexts>

            <ItemsButton>
              <Button>your.address@email.com</Button>
              <Button $yellow>Subscribe</Button>
            </ItemsButton>
          </div>
        </FooterItems>
        <FooterItems>
          <div>
            <FooterTitle>Follow us</FooterTitle>
            <FooterIcons>
              <Icons>
                <Imgs src={FooterIcon1} />
                <Imgs src={FooterIcon2} />
                <Imgs src={FooterIcon3} />
                <Imgs src={FooterIcon4} />
              </Icons>
              <IconTexts>
                <div>Buldmax-Ltd</div>
                <div>Buldmax-Ke</div>
                <div>Buldmax-Itd</div>
                <div>Buldmax Limited</div>
              </IconTexts>
            </FooterIcons>
          </div>
        </FooterItems>
      </FooterBox>

      <FooterBottom>
        <div>© BuildMax Limited | All Rights Reserved. | 2019</div>
        <FooterMenu>
            <div>Home</div>
            <div>About</div>
            <div>Contact</div>
            <div>Services</div>
        </FooterMenu>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
