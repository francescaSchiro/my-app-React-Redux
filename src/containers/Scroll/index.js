import React, { PureComponent } from "react";
import Wrapper from "./Wrapper";
import TitleWrapper from "./components/TitleWrapper";
import Title from "./components/Title";
import DotLine from "./components/DotLine";
import SectionWrapper from "./components/Section/SectionWrapper";
import SectionTitle from "./components/Section/SectionTitle";
import SectionParagraph from "./components/Section/SectionParagraph";
import ParallaxGlobalWrap from "../Parallax/components/ParallaxGlobalWrap";
import SectionsGlobalWrapper from "./components/Section/SectionsGlobalWrapper";

class Scroll extends PureComponent {
  render() {
    return (
      <ParallaxGlobalWrap>

        <Wrapper id="parallax">
          <TitleWrapper>
            <Title>
              ...Hey, <br />
              I'm Fran
              <DotLine />
            </Title>
          </TitleWrapper>

          <SectionsGlobalWrapper id='globalwrapper'>

            <SectionWrapper id="section-1" textAlign={"left"} alignItems={"flex-start"} >

                <SectionTitle id="title1"> Section One</SectionTitle>
                <SectionParagraph id="paragraph1">
                  Bacon ipsum dolor amet pork belly picanha cupim pig pork loin
                  corned beef capicola, frankfurter ball tip chicken. Shoulder
                  prosciutto short ribs short loin buffalo drumstick capicola
                  landjaeger pastrami ball tip shank fatback tail beef ribs
                  brisket. Buffalo turkey strip steak pork meatloaf t-bone
                  frankfurter capicola shank salami boudin. Biltong pig tenderloin
                  pastrami flank porchetta.
                </SectionParagraph>

            </SectionWrapper>
          

            <SectionWrapper id="section2" textAlign={"right"}  alignItems={"flex-end"} >

              <SectionTitle id="title2"> Section 2</SectionTitle>
              <SectionParagraph id="paragraph2">
                Bacon ipsum dolor amet pork belly picanha cupim pig pork loin
                corned beef capicola, frankfurter ball tip chicken. Shoulder
                prosciutto short ribs short loin buffalo drumstick capicola
                landjaeger pastrami ball tip shank fatback tail beef ribs
                brisket. Buffalo turkey strip steak pork meatloaf t-bone
                frankfurter capicola shank salami boudin. Biltong pig tenderloin
                pastrami flank porchetta.
              </SectionParagraph>

            </SectionWrapper>

          </SectionsGlobalWrapper>

        </Wrapper>
      </ParallaxGlobalWrap>
    );
  }
}

export default Scroll;
