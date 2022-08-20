import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "../headers/Navbar.js";

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen items-center flex`}
`;

const SingleColumn = tw.div`bg-blue-800 flex flex-col md:flex-row max-w-screen-xl mx-auto py-20 md:py-24 justify-center  items-center`;
const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-gray-900 opacity-75 rounded-b-2xl lg:rounded-b-none`;
const HeroImageBackground = styled.div`
  ${tw`z-0 absolute inset-0 h-screen object-cover w-full flex justify-end items-end rounded-b-2xl lg:rounded-b-none`}
`;
const HeroImageSet = styled.img`
  ${tw`w-full h-full object-cover rounded-b-2xl lg:rounded-b-none`}
`;

const Column = tw.div`w-full`;
const TextColumn = styled(Column)((props) => [
  tw`w-full md:w-8/12 mt-16 md:mt-0 z-10 px-5 md:px-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Heading = styled.h1`
  ${tw`text-gray-100 font-black text-left text-3xl sm:text-4xl lg:text-5xl md:text-center leading-tight uppercase`}
`;
const SubHeading = styled.h3`
  ${tw`text-gray-100 uppercase text-lg sm:text-sm lg:text-lg xl:text-xl leading-snug sm:mt-3 mt-3`}
`;

const Description = tw.p`text-gray-100 mt-24 md:text-center text-sm md:text-xl lg:text-2xl leading-snug`;

export default ({
  heading,
  subHeading,
  description,
  imageSrc = null,
  textOnLeft = true,
}) => {
  return (
    <Container>
      <Header />
      <SingleColumn>
        <OpacityOverlay />
        <HeroImageBackground>
          <HeroImageSet src={imageSrc} />
        </HeroImageBackground>
        <TextColumn textOnLeft={textOnLeft}>
          <SubHeading>{subHeading}</SubHeading>
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </TextColumn>
      </SingleColumn>
    </Container>
  );
};
