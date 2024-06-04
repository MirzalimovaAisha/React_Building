import React from "react";
import {
  Imgs,
  ItemSubTitle,
  ItemTexts,
  ItemTitle,
  SecTitle2,
  Section,
  SectionBox,
  SectionItem,
} from "./style";
import Icon1 from "../assets/sec3Icon1.svg";
import Icon2 from "../assets/sec3Icon2.svg";
import Icon3 from "../assets/sec3Icon3.svg";

const Section3 = () => {
  return (
    <Section>
      <SecTitle2>We Provide Below Services.</SecTitle2>

      <SectionBox>
        <SectionItem>
          <Imgs src={Icon1} />
          <ItemTexts>
            <ItemTitle>Retail-Fit Out & Carpentry</ItemTitle>
            <ItemSubTitle>
              Lorem ipsum dolor sit amet consect etur.
            </ItemSubTitle>
          </ItemTexts>
        </SectionItem>

        <SectionItem>
          <Imgs src={Icon2} />
          <ItemTexts>
            <ItemTitle>Construction</ItemTitle>
            <ItemSubTitle>
              Lorem ipsum dolor sit amet consect etur.
            </ItemSubTitle>
          </ItemTexts>
        </SectionItem>

        <SectionItem>
          <Imgs src={Icon3} />
          <ItemTexts>
            <ItemTitle>interior & space planing</ItemTitle>
            <ItemSubTitle>
              Lorem ipsum dolor sit amet consect etur.
            </ItemSubTitle>
          </ItemTexts>
        </SectionItem>
      </SectionBox>
    </Section>
  );
};

export default Section3;
