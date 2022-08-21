import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading as HeadingBase,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import {
  SectionDescription,
  CardDescription as CardDescription,
  CardTitle as CardTitle,
} from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import SupportIconImage from "images/icon/misc/support-icon.svg";
import ShieldIconImage from "images/icon/misc/shield-icon.svg";
import CustomizeIconImage from "images/icon/misc/customize-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "images/other/svg-decorator-blob-3.svg";

const Heading = tw(HeadingBase)`text-center`;
const Subheading = tw(SubheadingBase)`text-center`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const CardTitleText = tw(CardTitle)`mt-4`;

const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;

const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;

const Card = styled.a`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 rounded-lg`}
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-primary-200`}
    img {
      ${tw`w-5 h-5`}
    }
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;

export default ({
  cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description:
        "We strictly only deal with vendors that provide top notch security.",
    },
    {
      imageSrc: SupportIconImage,
      title: "24/7 Support",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Customizable",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
    },
  ],
  heading = "",
  subheading = "",
  description = "",
  imageContainerCss = null,
  imageCss = null,
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
        <ThreeColumnContainer>
          {cards.map((card, i) => (
            <Column key={i}>
              <Card>
                <span className="imageContainer" css={imageContainerCss}>
                  <img src={card.imageSrc} alt="" css={imageCss} />
                </span>
                <CardTitleText>{card.title}</CardTitleText>
                <CardDescription>{card.description}</CardDescription>
              </Card>
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob />
    </Container>
  );
};
