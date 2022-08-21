import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

import sliderImage1 from "images/_dummy/banner/banner1.jpg";
import sliderImage2 from "images/_dummy/banner/banner2.jpg";
import sliderImage3 from "images/_dummy/banner/banner3.jpg";
import sliderImage4 from "images/_dummy/banner/banner4.jpg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between mt-5`;
const Heading = tw(SectionHeading)`text-left`;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-3 p-2  rounded-lg bg-gray-100 text-gray-900 hover:bg-gray-800 focus:bg-gray-900 focus:outline-none focus:border-0 focus:shadow-none`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const PrevButton = tw(
  ControlButton
)`flex flex-row items-center justify-center font-light`;
const NextButton = tw(
  ControlButton
)`flex flex-row items-center justify-center font-light`;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track {
    ${tw`flex gap-2`}
  }
  .slick-slide {
    ${tw`flex flex-col object-cover`}
  }
`;

const Card = tw.div`h-100 bg-green-200 bg-green-200 relative focus:outline-none`;
const CardImage = styled.div((props) => [
  `background-image: url("${props.imageSliderSrc}");`,
  tw`w-full h-full bg-cover bg-center rounded sm:rounded-none`,
]);

export default ({
  heading = "",
  cards = [
    {
      imageSliderSrc: sliderImage1,
    },
    {
      imageSliderSrc: sliderImage2,
    },
    {
      imageSliderSrc: sliderImage3,
    },
    {
      imageSliderSrc: sliderImage4,
    },
  ],
}) => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 1,
    infinite: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  /* Change this according to your needs */
  return (
    <Container>
      <Content>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index} style={{ width: 1200, height: 500 }}>
              <CardImage imageSliderSrc={card.imageSliderSrc} />
            </Card>
          ))}
        </CardSlider>
        <HeadingWithControl>
          <Heading>{heading}</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}>
              <ChevronLeftIcon />
            </PrevButton>
            <NextButton onClick={sliderRef?.slickNext}>
              <ChevronRightIcon />
            </NextButton>
          </Controls>
        </HeadingWithControl>
      </Content>
    </Container>
  );
};
