import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "./components/hero/MainHero.js";
import Features from "./components/features/ThreeColSimple.js";
import MainFeature from "./components/features/TwoColWithButton.js";
import MainFeature2 from "./components/features/SingleColWithSteps.js";
import TabGrid from "./components/cards/TabCardGrid.js";
import Testimonial from "./components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "./components/footers/FiveColumnWithInputForm.js";
import chefIconImageSrc from "images/icon/misc/chef-icon.svg";
import celebrationIconImageSrc from "images/icon/misc/celebration-icon.svg";
import shopIconImageSrc from "images/icon/misc/shop-icon.svg";

/** Setup Background */
import imgAbout from "images/_dummy/background/bg_hero_2.jpg";
export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`text-primary-500 inline-block font-light`;
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
        imageDecoratorBlobCss={tw`right-1/2 -translate-x-1/2 md:w-64 md:h-64 opacity-25`}
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
            title: "100+ Locations",
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
        subheading={<Subheading>Timeline Preparation</Subheading>}
        heading={
          <>
            #open<HighlightedText>new franchise </HighlightedText>
          </>
        }
        steps={[
          {
            heading: "Commitment",
            description: "Making deal with commitment",
          },
          {
            heading: "Location Survey",
            description: "We help to get the best location",
          },
          {
            heading: "Designing",
            description: "Design youre stroe",
          },
          {
            heading: "Repayment",
            description: "Payment Fee",
          },
          {
            heading: "Equipment & Materials",
            description: "Send Equipment & Raw Materials to new store",
          },
          {
            heading: "Employee Training",
            description: "Training new Employee",
          },
          {
            heading: "Opening Store",
            description: "Good Luck :)",
          },
        ]}
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
