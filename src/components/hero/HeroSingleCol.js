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
import { useScrollable } from "components/headers/useScrollable.js";

const Container = styled.div`
  ${tw`relative inset-0 bg-center bg-cover h-screen lg:h-auto items-center bg-gray-500`}
`;

const HeroContainer = tw.div`flex flex-col md:flex-row max-w-screen-xl mx-auto py-24 lg:py-24 h-full justify-center md:justify-start items-center mb-48`;
const Content = tw.div`w-full z-20 px-6 lg:px-0 flex flex-col md:w-8/12 lg:w-4/12 xl:w-6/12`;
const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-white opacity-0 mx-auto`;
const HeroImageBackground = styled.div`
  ${tw`z-0 absolute inset-0 w-screen h-auto w-full lg:mx-auto bg-green-200`}
`;
const HeroImageSet = styled.img`
  ${tw`absolute h-7/12 md:h-7/12 lg:h-screen md:right-0 lg:right-0 bottom-0 lg:top-0 object-cover`}
`;
const Heading = styled.h1`
  ${tw`font-montseralt uppercase text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-none mt-0 xl:mt-32 max-w-2xl`}
  span {
    ${tw`inline-block mt-2 text-primary-500`}
  }
`;

const SubHeading = styled.h3`
  ${tw`text-sm sm:text-sm lg:text-lg xl:text-xl tracking-widest text-gray-900 leading-snug sm:mt-3 mt-3`}
  span {
    ${tw`text-red-700`}
  }
`;

const Description = tw.p`rounded-3xl font-montser font-medium text-gray-800 mt-4 text-lg sm:text-3xl md:text-lg lg:text-xl xl:text-xl leading-snug`;

export default ({ heading, subHeading, description, imageSrc = null }) => {
  const { isScroll } = useScrollable();

  /**  Animated when scroll */
  const MainHeader = styled.div`
    ${isScroll
      ? tw`z-30 absolute pt-10 h-3/12 flex justify-between mx-auto w-full`
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
        ? tw`text-gray-900 hover:text-primary-500`
        : tw`text-gray-900 hover:text-primary-500`}
    }
  `;

  const navLinks = [
    <NavLinks key={1}>
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
        <OpacityOverlay />
        <HeroImageBackground>
          <HeroImageSet src={imageSrc} />
        </HeroImageBackground>
        <Content>
          <Heading>{heading}</Heading>
          <SubHeading>{subHeading}</SubHeading>
          <Description>{description}</Description>
        </Content>
      </HeroContainer>
    </Container>
  );
};
