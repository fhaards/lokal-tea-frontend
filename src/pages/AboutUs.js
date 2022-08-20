import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { useScrollable } from "components/headers/useScrollable.js";
import Header from "components/headers/LightNavbar.js";
import Hero from "components/hero/SingleColumnSimple";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import Features from "components/features/ThreeColSimple.js";
import SupportIconImage from "images/icon/misc/support-icon.svg";
import ShieldIconImage from "images/icon/misc/shield-icon.svg";
import CustomerLoveIconImage from "images/icon/misc/simple-icon.svg";
import imageSrc from "images/_dummy/background/bg1.jpg";
import ImageAbout1 from "images/_dummy/square/square1.png";
import ImageAbout2 from "images/_dummy/square/square4.png";

const Subheading = tw.span`tracking-wider text-sm font-medium`;
const HighlightedText = tw.span`text-primary-500 inline-block font-light`;
const DescriptionText = tw.span`text-gray-600 text-right`;
const imageCss = tw`p-5 bg-red-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Our
            <wbr /> <HighlightedText>Story</HighlightedText>
          </>
        }
        description={
          <>
            In the last 20 years, bubble tea and milk tea drinks have been
            popular in Indonesia. Now we want to bring you a different kind of
            extraordinary, the next big thing in drink concept to set a new
            trend in Indonesia; Cheese Tea drink. We also dream big of helping
            you chase towards entrepreneurship opportunity. No boss, no boring
            desk job. Just imagine the smell of freshly brewed tea and the
            smiles of happy customers. Its the dream of millions. Your own tea
            shops.
          </>
        }
        imageCsss={imageCss}
        imageSrc={imageSrc}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`right-0 top-0 -translate-x-1/2 md:w-144 md:h-144 opacity-25`}
        primaryButtonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
      />
      <MainFeature1
        subheading={<Subheading>#RESPONSIBILITEA</Subheading>}
        heading={
          <>
            MAKE FOR
            <wbr /> <HighlightedText>THE BEST</HighlightedText>
          </>
        }
        description={
          <>
            <DescriptionText>
              Quality is king, so the pair went to the Taiwanese highlands to
              source the authentic Taiwanese tea leaves known for its finest
              quality and strong aroma and to develop the most delicious and
              rich-tasting cheese foam. With the help of a Taiwanese tea master,
              the duo worked on to formulate the best cheese tea drinks soon to
              be known in Indonesia.
            </DescriptionText>
          </>
        }
        buttonRounded={false}
        buttonHidden={true}
        primaryButtonText="See Portfolio"
        imageSrc={ImageAbout1}
      />
      <MainFeature1
        subheading={<Subheading>#THEVISION</Subheading>}
        heading={
          <>
            AIM TO
            <wbr /> <HighlightedText>EVERYONE</HighlightedText>
          </>
        }
        buttonRounded={false}
        buttonHidden={true}
        primaryButtonText="Contact Us"
        imageSrc={ImageAbout2}
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>#OURVALUES</Subheading>}
        heading={
          <>
            WE FOLLOW
            <wbr /> <HighlightedText>THESE</HighlightedText>
          </>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
        ]}
        linkText=""
      />
      <Footer />
    </AnimationRevealPage>
  );
};
