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
} from "../headers/light.js";

import { useScrollable } from "components/headers/useScrollable.js";

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-primary-400 h-screen rounded-b-6xl`}
`;
const OpacityOverlay = tw.div`z-20 absolute inset-0 bg-primary-900 opacity-75 rounded-b-6xl`;
const HeroImageBackground = styled.div`
  ${tw`z-10 absolute inset-0 h-screen object-cover w-full flex justify-end items-end rounded-b-6xl`}
`;
const HeroImageSet = styled.img`
  ${tw`w-full h-full object-cover rounded-b-6xl`}
`;
const HeroContainer = tw.div`z-30 relative px-5 md:px-0 max-w-screen-xl mx-auto h-full flex flex-col justify-center items-center`;
const Content = tw.div`px-6 lg:px-0 flex flex-1 flex-col justify-center text-center lg:w-6/12`;
const Heading = styled.h1`
  ${tw`text-gray-100 text-4xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase font-medium tracking-widest leading-snug sm:mt-0 max-w-2xl`}
`;
const SubHeading = styled.h3`
  ${tw`text-gray-300 uppercase text-lg sm:text-sm lg:text-lg xl:text-xl tracking-widest leading-snug sm:mt-3 mt-3`}
`;
const Decription = tw.p`text-primary-100 mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed`;
export default ({ heading, subHeading, description, backgroundSrc }) => {
  const { isScroll } = useScrollable();

  /**  Animated when scroll */
  const MainHeader = styled.div`
    ${isScroll
      ? tw`h-3/12 flex justify-between mx-auto w-full transition duration-300 ease-in-out`
      : tw`fixed left-0 top-0 h-20 bg-white w-full mx-auto border-b transition duration-300 ease-in-out`}
  `;

  /** Styling Headers */
  const StyledHeader = styled(Header)`
    ${tw`w-full max-w-screen-xl flex items-center h-full mx-auto px-6 sm:px-0`}
    ${DesktopNavLinks} ${NavLink} {
      ${isScroll
        ? tw`text-gray-100 hover:text-primary-500`
        : tw`text-gray-800 hover:text-primary-500`}
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
      <OpacityOverlay />
      <HeroImageBackground>
        <HeroImageSet src={backgroundSrc} />
      </HeroImageBackground>
      <HeroContainer>
        <MainHeader>
          <StyledHeader isScroll={isScroll} links={navLinks} />
        </MainHeader>
        <Content>
          <Heading>{heading}</Heading>
          <SubHeading>{subHeading}</SubHeading>
          <Decription>{description}</Decription>
        </Content>
      </HeroContainer>
    </Container>
  );
};
