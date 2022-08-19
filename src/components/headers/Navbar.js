import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";
import logoLight from "../../images/app_img/lokaltea_logo_white.svg";
import logoDark from "../../images/app_img/lokaltea_logo.svg";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { useScrollable } from "components/headers/useScrollable.js";

export const NavLinks = tw.div`inline-block`;
export const NavLink = tw.a`
  text-lg py-3 lg:py-2 lg:text-sm lg:ml-10 lg:my-0 border-t lg:border-0 sm:border-0
  font-semibold tracking-wide transition duration-300 hocus:text-primary-500
`;
export const PrimaryLink = tw(NavLink)`
  lg:mx-0 px-8 py-3 rounded text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline border-0 border-t-0 border-b-0
`;
export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-0 border-t-0 border-b-0 text-2xl! ml-0!`};
  img {
    ${tw`h-10 mr-3`}
  }
`;
export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between relative`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed items-center top-0 inset-x-0 shadow-xl text-gray-900 bg-white h-6/12`}
  ${NavLinks} {
    ${tw`flex flex-col mx-5`}
  }
`);
export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

const OpacityCloseBtn = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

export default ({
  roundedHeaderButton = false,
  links,
  className,
  collapseBreakpointClass = "lg",
}) => {
  /** Scrolling Effects */

  const { isScroll } = useScrollable();

  const Header = styled.header`
    ${isScroll
      ? tw`h-3/12 flex justify-between mx-auto w-full transition delay-300 duration-300 ease-in-out`
      : tw`z-20 fixed flex justify-between mx-auto w-full bg-gray-100 left-0 top-0 h-20  w-full mx-auto border-b transition delay-300 duration-300 ease-in-out`}
  `;

  const StyledHeader = styled.header`
    ${tw`w-full max-w-screen-xl flex items-center h-full mx-auto px-6 sm:px-0`}
    ${DesktopNavLinks} ${NavLink} {
      ${tw`text-gray-600 hover:text-primary-500`}
    }
  `;

  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about-us">About</NavLink>
      <NavLink href="/menu-list">Menu</NavLink>
      <NavLink href="/contact-us">Contact</NavLink>
    </NavLinks>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];

  const SetCloseIcon = tw.div`fixed bottom-0 left-0 w-full h-6/12 flex items-center justify-center`;

  // logoLink = isUpper ? defaultLogoLink : collapseLogoLink;

  links = links || defaultLinks;
  return (
    <Header className={className || "header-light"} isScroll={isScroll}>
      <StyledHeader>
        <DesktopNavLinks
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          css={collapseBreakpointCss.desktopNavLinks}
        >
          <LogoLink href="/">
            <img src={logoDark} alt="logo" height="200" />
          </LogoLink>
          {links}
        </DesktopNavLinks>

        <MobileNavLinksContainer
          css={collapseBreakpointCss.mobileNavLinksContainer}
        >
          <LogoLink href="/">
            <img
              src={isScroll ? logoLight : logoDark}
              alt="logo"
              height="200"
            />
          </LogoLink>
          <MobileNavLinks
            initial={{ x: "150%", display: "none" }}
            animate={animation}
            css={collapseBreakpointCss.mobileNavLinks}
          >
            {links}
          </MobileNavLinks>
          <NavToggle
            onClick={toggleNavbar}
            className={showNavLinks ? "open" : "closed"}
          >
            {showNavLinks ? (
              <SetCloseIcon>
                <OpacityCloseBtn />
                <CloseIcon
                  initial={{ x: "150%", display: "none" }}
                  animate={animation}
                  tw="z-20 w-20 h-20 bg-gray-100 rounded-full p-2 place-items-center "
                />
              </SetCloseIcon>
            ) : (
              <MenuIcon tw="w-6 h-6" />
            )}
          </NavToggle>
        </MobileNavLinksContainer>
      </StyledHeader>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};
