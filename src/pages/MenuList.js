import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { useScrollable } from "components/headers/useScrollable.js";
import Hero from "components/hero/PageHero.js";
import ImageHero from "images/_dummy/background/bg_sq_2.jpg";
import TabGrid from "components/cards/TabCardGrid.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

const Subheading = tw.span`tracking-wider text-sm font-medium text-gray-300`;
const HighlightedText = tw.span`text-primary-500 inline-block font-light`;
const DescriptionText = tw.span`text-gray-600 text-right`;
const imageCss = tw`rounded-tl-full rounded-br-full bg-red-500`;

export default () => {
  const { isScroll } = useScrollable();
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Our
            <wbr /> <HighlightedText>Menu</HighlightedText>
          </>
        }
        subHeading={
          <>
            <Subheading>Made from lokal</Subheading>
          </>
        }
        backgroundSrc={ImageHero}
        imageDecoratorBlob={false}
        primaryButtonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
        isScroll={isScroll}
      />
      <TabGrid
        heading={
          <>
            #lokal<HighlightedText> menu.</HighlightedText>
          </>
        }
      />
      <Footer />
    </AnimationRevealPage>
  );
};
