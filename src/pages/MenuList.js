import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/Navbar";
import TabGrid from "components/cards/TabCardGrid.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";

const HighlightedText = tw.span`text-primary-500 inline-block font-light`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
`;

export default () => {
  return (
    <AnimationRevealPage>
      <Container>
        <Header />
        <TabGrid
          heading={
            <>
              #lokal<HighlightedText> menu.</HighlightedText>
            </>
          }
        />
        <Footer />
      </Container>
    </AnimationRevealPage>
  );
};
