import React, { PureComponent } from "react";
import Wrapper from "./Wrapper";
import TitleWrapper from "./components/TitleWrapper";
import Title from "./components/Title";
import DotLine from "./components/DotLine";
import SectionWrapper from "./components/Section/SectionWrapper";
import SectionTitle from "./components/Section/SectionTitle";
import SectionParagraph from "./components/Section/SectionParagraph";


class Scroll extends PureComponent {
  render() {
    return (
      <Wrapper id="parallax">
        <TitleWrapper>
          <Title>
            ...Hey, <br />
            I'm Fran
            <DotLine />
          </Title>
         
        </TitleWrapper>  

        <SectionWrapper id="section-1"  align={"flex-start"} text-align={"left"} >
          <SectionTitle id="section-title"> Section One</SectionTitle>
          <SectionParagraph id="section-paragraph">
            Bacon ipsum dolor amet pork belly picanha cupim pig pork loin corned
            beef capicola, frankfurter ball tip chicken. Shoulder prosciutto
            short ribs short loin buffalo drumstick capicola landjaeger pastrami
            ball tip shank fatback tail beef ribs brisket. Buffalo turkey strip
            steak pork meatloaf t-bone frankfurter capicola shank salami boudin.
            Biltong pig tenderloin pastrami flank porchetta.
          </SectionParagraph>
          <span></span>
        </SectionWrapper>

        <SectionWrapper id="section2" align={"flex-end"} text-align={"right"} >
          <SectionTitle> Section 2</SectionTitle>
          <SectionParagraph>
            Bacon ipsum dolor amet pork belly picanha cupim pig pork loin corned
            beef capicola, frankfurter ball tip chicken. Shoulder prosciutto
            short ribs short loin buffalo drumstick capicola landjaeger pastrami
            ball tip shank fatback tail beef ribs brisket. Buffalo turkey strip
            steak pork meatloaf t-bone frankfurter capicola shank salami boudin.
            Biltong pig tenderloin pastrami flank porchetta.
          </SectionParagraph>
        </SectionWrapper>

      </Wrapper>
    );
  }
}

export default Scroll;
