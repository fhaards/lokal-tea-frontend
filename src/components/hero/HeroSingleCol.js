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
  ${tw`relative  bg-center bg-cover h-144 md:h-screen items-center`}
`;

const HeroContainer = tw.div`flex flex-col md:flex-row w-screen mx-auto py-20 md:py-24 justify-center items-center`;
const Content = tw.div`z-20 px-6 lg:px-0 flex flex-col justify-center items-center md:w-8/12 lg:w-5/12 xl:w-7/12`;
const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-100 opacity-100 mx-auto`;
const HeroImageBackground = styled.div`
  ${tw`z-0 absolute inset-0 h-144 md:h-screen object-cover w-full mx-auto  `}
`;
const HeroImageSet = styled.img`
  ${tw`w-full h-full object-cover`}
`;
const Heading = styled.h1`
  ${tw`font-montseralt uppercase text-center text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-none -mt-24 sm:mt-0 max-w-2xl`}
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

const Description = tw.p`font-montser text-gray-800 mt-4 md:text-center text-sm md:text-sm lg:text-lg xl:text-3xl leading-snug`;

export default ({ heading, subHeading, description, imageSrc = null }) => {
  const { isScroll } = useScrollable();

  /**  Animated when scroll */
  const MainHeader = styled.div`
    ${isScroll
      ? tw`z-30 h-3/12 flex justify-between mx-auto w-full`
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
