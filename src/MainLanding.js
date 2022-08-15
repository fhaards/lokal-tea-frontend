import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "./_components/hero/MainHero.js";
import Features from "./components/features/ThreeColSimple.js";
import MainFeature from "./components/features/TwoColWithButton.js";
import MainFeature2 from "./components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "./components/cards/TabCardGrid.js";
import Testimonial from "./components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "./components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

/** Setup Background */
import imgAbout from "./_images/_dummy/background/bg_hero_2.jpg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`text-primary-500 inline-block font-light`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block font-mono`;
  const Description = tw.span`inline-block mt-8 `;
  const imageCss = tw`rounded-tl-full rounded-br-full`;

  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Delicious & Affordable{" "}
            <HighlightedText>Meals Near You.</HighlightedText>
          </>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageCss={imageCss}
        imageDecoratorBlob={false}
        primaryButtonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
      />
      <MainFeature
        subheading={<Subheading>Established Since 2022</Subheading>}
        heading={
          <>
            We've
            <wbr /> <HighlightedText>The local Tea.</HighlightedText>
          </>
        }
        description={
          <Description>
            At whatever path of life you are in, tea can serve that purpose. We
            truly believe that as you step with us, we can find you that
            specific tea for your special moments ..
            <br />
          </Description>
        }
        buttonRounded={false}
        buttonHidden={true}
        textOnLeft={false}
        primaryButtonText="Farmer"
        primaryButtonUrl="https://facebook.com"
        imageSrc={imgAbout}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}

      <TabGrid
        heading={
          <>
            It's <HighlightedText> a drink.</HighlightedText>
          </>
        }
      />
      <Features
        heading={
          <>
            #amazing <HighlightedText>us.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "230+ Locations",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://google.com",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Professional Chefs",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://timerse.com",
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Birthday Catering",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://reddit.com",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20! `}
      />
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={
          <>
            Why <HighlightedText>Choose Us ?</HighlightedText>
          </>
        }
        statistics={[
          {
            key: "Orders",
            value: "94000+",
          },
          {
            key: "Customers",
            value: "11000+",
          },
          {
            key: "Chefs",
            value: "1500+",
          },
        ]}
        primaryButtonText="Order Now"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <Testimonial
        subheading=""
        heading={
          <>
            #customers<HighlightedText>say</HighlightedText>
          </>
        }
      />

      <Footer />
    </AnimationRevealPage>
  );
};
