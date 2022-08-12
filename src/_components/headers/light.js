import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";
import logo from "../../_images/app_img/lokaltea2_logo_white.svg";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

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
  logoLink,
  links,
  className,
  collapseBreakpointClass = "lg",
}) => {
  const defaultLinks = [
    <NavLinks key={1}>
      <NavLink href="/#">About</NavLink>
      <NavLink href="/#">Blog</NavLink>
      <NavLink href="/#">Pricing</NavLink>
      <NavLink href="/#">Contact Us</NavLink>
      <NavLink href="/#" tw="lg:ml-12!">
        Login
      </NavLink>
      <PrimaryLink css={roundedHeaderButton && tw`rounded-full`} href="/#">
        Sign Up
      </PrimaryLink>
    </NavLinks>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src={logo} alt="logo" height="200" />
    </LogoLink>
  );

  const SetCloseIcon = tw.div`fixed bottom-0 left-0 w-full h-6/12 flex items-center justify-center`;

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks
        initial={{ x: "150%", display: "none" }}
        animate={animation}
        css={collapseBreakpointCss.desktopNavLinks}
      >
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer
        css={collapseBreakpointCss.mobileNavLinksContainer}
      >
        {logoLink}
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
