import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "components/headers/Navbar";
import TabGrid from "components/cards/products/ProductGridList";
import Footer from "components/footers/FiveColumnWithInputForm.js";

const HighlightedText = tw.span`text-primary-500 inline-block`;
const Container = styled.div`
  ${tw`relative bg-center bg-cover`}
`;

const Content = styled.div`
  ${tw`py-24`}
`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Container>
        <Content>
          <TabGrid
            heading={
              <>
                #Lokal<HighlightedText> Menu.</HighlightedText>
              </>
            }
          />
        </Content>
        <Footer />
      </Container>
    </AnimationRevealPage>
  );
};
