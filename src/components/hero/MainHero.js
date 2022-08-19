import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light";

import { useScrollable } from "components/headers/useScrollable.js";

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144  bg-cover bg-center bg-fixed`}
  background-image: url("https://images.unsplash.com/photo-1433704334812-6c45b0b8784d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80");
`;
const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-green-900 opacity-75 `;
const HeroContainer = tw.div`z-20 relative px-5 md:px-0 max-w-screen-xl mx-auto h-full flex flex-col`;
const Content = tw.div`px-6 lg:px-0 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-4xl sm:text-4xl lg:text-5xl xl:text-6xl uppercase font-medium tracking-widest text-gray-100 leading-snug -mt-24 sm:mt-0 max-w-2xl`}
  span {
    ${tw`inline-block mt-2 text-primary-500`}
  }
`;

const SubHeading = styled.h3`
  ${tw`text-lg sm:text-sm lg:text-lg xl:text-xl tracking-widest text-gray-100 leading-snug sm:mt-3 mt-3`}
  span {
    ${tw`text-red-700`}
  }
`;

export default () => {
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
      <HeroContainer>
        <MainHeader>
          {/* <StyledHeader logoLink={logo} isScroll={isScroll} links={navLinks} /> */}
          <StyledHeader isScroll={isScroll} links={navLinks} />
        </MainHeader>
        <Content>
          <Heading>
            a <span>simple</span> cup of <span>tea</span> is far from a{" "}
            <span>simple</span> matter
            <br />
            <br />
          </Heading>
          <SubHeading>
            <span>#indonesia</span> #autenthic #localtea
          </SubHeading>
        </Content>
      </HeroContainer>
    </Container>
  );
};
