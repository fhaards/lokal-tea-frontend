import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/LightNavbar";
import { SectionDescription as DescriptionText } from "components/misc/Typography.js";
import { useScrollable } from "components/headers/useScrollable.js";
import { ReactComponent as SvgDotPattern } from "images/other/svg-decorator-blob-2.svg";
import AnimationReveal from "helpers/AnimationRevealPage.js";

const Container = styled.div`
  ${tw`relative bg-center bg-cover h-screen md:h-screen items-center bg-primary-100 rounded-b-6xl md:rounded-b-none md:rounded-b-none`}
`;

const HeroContainer = tw.div`flex flex-col md:flex-row max-w-screen-xl mx-auto justify-center items-center`;
const Content = tw.div`z-20 px-4 lg:px-0 flex flex-col md:flex-row justify-center items-center md:w-full`;
const OpacityOverlay = tw.div`z-10 absolute inset-0 opacity-0 bg-primary-400 rounded-md`;

const TextColumn = styled(Content)((props) => [
  tw`lg:w-6/12 mt-24 sm:mt-24 md:mt-0 lg:mt-0 flex flex-col z-10 lg:px-0`,
  props.textOnLeft
    ? tw`md:mr-10 lg:mr-12 md:order-first`
    : tw`md:ml-10 lg:ml-12 md:order-last`,
]);
const Heading = styled.h1`
  ${tw`font-montseralt text-4xl sm:text-3xl md:text-6xl lg:text-6xl xl:text-6xl normal-case text-primary-500 leading-none max-w-2xl`}
  span {
    ${tw`inline-block mt-2 text-gray-900`}
  }
`;
const SubHeading = styled.h3`
  ${tw`w-full text-sm sm:text-sm lg:text-lg xl:text-xl tracking-widest text-gray-800 leading-snug sm:mt-3 mt-3`}
  span {
    ${tw`text-red-700`}
  }
`;
const Description = tw(
  DescriptionText
)`text-gray-700 mt-4 md:text-center text-sm md:text-xl lg:text-xl leading-snug`;

const ImageColumn = tw(
  Content
)`w-10/12 md:w-6/12 lg:w-6/12 flex-shrink-0 md:relative absolute -z-10`;
const Image = styled.img((props) => [
  props.imageRounded && tw`rounded-lg`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
]);

const DecoratorBlob = styled(SvgDotPattern)((props) => [
  tw`absolute fill-current text-primary-500 opacity-75 z-10`,
]);

export default ({
  heading,
  subHeading,
  description,
  heroImage = null,
  imageCss = null,
  imageBorder,
  imageShadow,
  imageRounded,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  textOnLeft = true,
}) => {
  const { isScroll } = useScrollable();

  /**  Animated when scroll */
  const MainHeader = styled.div`
    ${isScroll
      ? tw`h-3/12 flex justify-between mx-auto w-full`
      : tw`z-30 fixed left-0 top-0 h-20 bg-white w-full mx-auto border-b`}
  `;

  /** Styling Headers */
  const StyledHeader = styled(Header)`
    ${tw`z-30 w-full max-w-screen-xl flex items-center h-full mx-auto px-6 lg:px-0`}
    ${DesktopNavLinks} ${NavLink} {
      ${isScroll
        ? tw`text-gray-900 hover:text-primary-500`
        : tw`text-gray-900 hover:text-primary-500`}
    }
    ${LogoLink} {
    }
    ${NavToggle}.closed {
      ${isScroll
        ? tw`text-gray-100 hover:text-primary-500`
        : tw`text-gray-800 hover:text-primary-500`}
    }
  `;

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/"></NavLink>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about-us">About</NavLink>
      <NavLink href="/menu-list">Menu</NavLink>
      <NavLink href="/contact-us">Contact</NavLink>
    </NavLinks>,
  ];

  return (
    <Container>
      <MainHeader>
        {/* <StyledHeader logoLink={logo} isScroll={isScroll} links={navLinks} /> */}
        <StyledHeader isScroll={isScroll} links={navLinks} />
      </MainHeader>
      <HeroContainer>
        <OpacityOverlay></OpacityOverlay>

        <Content>
          <TextColumn textOnLeft={textOnLeft}>
            <Heading>{heading}</Heading>
            <SubHeading>{subHeading}</SubHeading>
            <Description>{description}</Description>
          </TextColumn>

          <ImageColumn>
            <Image
              css={imageCss}
              src={heroImage}
              imageBorder={imageBorder}
              imageShadow={imageShadow}
              imageRounded={imageRounded}
            />
          </ImageColumn>
        </Content>

        {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
      </HeroContainer>
    </Container>
  );
};
