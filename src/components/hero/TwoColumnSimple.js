import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "../headers/Navbar.js";
import { ReactComponent as SvgDotPattern } from "images/other/dot-pattern.svg";

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center h-screen items-center flex`}
`;

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
]);

const Heading = styled.h1`
  ${tw`font-black text-left text-3xl sm:text-4xl lg:text-5xl md:text-left leading-tight uppercase`}
`;
const SubHeading = styled.h3`
  ${tw`text-gray-800 uppercase text-lg sm:text-sm lg:text-lg xl:text-xl leading-snug sm:mt-3 mt-3`}
`;

const Description = tw.p`mt-4 md:text-justify text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Image = styled.img((props) => [
  props.imageRounded && tw`rounded-lg`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`w-20 h-20 absolute  fill-current text-primary-500 -z-10`,
]);

export default ({
  heading,
  subHeading,
  description,
  imageRounded = true,
  imageSrc = null,
  imageCss = null,
  imageBorder = false,
  imageShadow = false,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = true,
}) => {
  return (
    <Container>
      <TwoColumn>
        {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        <Header />
        <TextColumn textOnLeft={textOnLeft}>
          <SubHeading>{subHeading}</SubHeading>
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </TextColumn>
        <ImageColumn>
          <Image
            css={imageCss}
            src={imageSrc}
            imageBorder={imageBorder}
            imageShadow={imageShadow}
            imageRounded={imageRounded}
          />
        </ImageColumn>
      </TwoColumn>
    </Container>
  );
};
