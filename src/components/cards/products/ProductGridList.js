import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import {
  SectionSubheading,
  SectionHeading,
} from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/icon/misc/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/other/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/other/svg-decorator-blob-7.svg";
import { Subheading } from "components/misc/Headings";

const HeaderRow = tw.div`flex justify-between items-center flex-col`;
const Header = tw(SectionHeading)`text-center mb-12`;
const Subheader = tw(SectionSubheading)`text-center`;
const TabsControl = tw.div`flex flex-wrap max-w-screen-xl bg-transparent w-full p-5 lg:w-auto lg:p-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`border border-transparent cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 
  text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base 
  w-1/4 sm:w-1/2 sm:w-auto text-center rounded-br-3xl! rounded-tl-3xl!`}
  &:hover {
    ${tw`border! border-primary-500! bg-primary-500! text-white! rounded-br-3xl! rounded-tl-3xl!`}
  }
  ${(props) =>
    props.active &&
    tw`border! border-primary-500! bg-primary-500! text-white! rounded-br-3xl! rounded-tl-3xl!`}
  }
`;

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 px-3 w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-transparent rounded-b-xl block max-w-xs mx-auto sm:max-w-none sm:mx-0 `;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t-xl bg-gray-600`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;
const CardReview = tw.div`hidden font-medium text-xs text-gray-600`;
const CardText = tw.div`py-4 px-0 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Checkout the Menu",
  tabs = {
    Starters: [
      {
        imageSrc:
          "https://www.estehindonesia.com/storage/app/banners/FKytbUpvCr1DA7JWZAkRXPho48SoEe.jpg",
        title: "The Original",
        content: "Local Original One",
        price: "RP, 15.000",
        rating: "5.0",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc:
          "https://www.estehindonesia.com/storage/app/banners/POUAOJ3hKd0bQ9xymzOqdjqxoU2qRM.jpg",
        title: "lychee Tea",
        content: "The splash touch into youre heart",
        price: "RP, 23.000",
        rating: "4.5",
        reviews: "34",
        url: "#",
      },
      {
        imageSrc:
          "https://www.estehindonesia.com/storage/app/banners/oxrZBlhQauCZvRENRhwTrae3AvA4pI.jpg",
        title: "Avocado Tea",
        content: "Combination of Avocado an Teas",
        price: "RP, 20.000",
        rating: "3.9",
        reviews: "26",
        url: "#",
      },
      {
        imageSrc:
          "https://www.estehindonesia.com/storage/app/banners/vrZNMGAFrbm3XsfCaWoNAeUuN6vfVJ.jpg",
        title: "Thai Tea",
        content: "Mixed culture of Thai",
        price: "RP, 17.000",
        rating: "4.2",
        reviews: "95",
        url: "#",
      },
      {
        imageSrc:
          "https://www.estehindonesia.com/storage/app/banners/vyaVsCbmxNcQFxSizmFfcgL41wgKK6.jpg",
        title: "Jasmine Tea",
        content: "Refreshing jasmine scent",
        price: "RP, 16.000",
        rating: "5.0",
        reviews: "61",
        url: "#",
      },
      {
        imageSrc:
          "https://www.estehindonesia.com/storage/app/banners/AGhtbBrz5Spy9v2vUkpszht5Nmnm6b.jpg",
        title: "Manggo Tea",
        content: "Combination of Manggo and Tea",
        price: "RP, 20.000  ",
        rating: "4.9",
        reviews: "89",
        url: "#",
      },
      {
        imageSrc:
          "https://www.estehindonesia.com/storage/app/banners/KZiK6G6ykXLWhRUeOLyQYhTyMv2S2o.jpg",
        title: "Lemonade Berry",
        content: "Refreshing Lemonade Berry",
        price: "RP, 16.000",
        rating: "4.6",
        reviews: "12",
        url: "#",
      },
      {
        imageSrc:
          "https://www.estehindonesia.com/storage/app/banners/eWVZZiVp8mBBeRr7iQMAINAdrVy7sl.jpg",
        title: "Strawberry Seasalt Matcha",
        content: "Combination of Strawberry and Matcha",
        price: "RP, 25.000",
        rating: "4.2",
        reviews: "19",
        url: "#",
      },
    ],
    Main: getRandomCards(),
    Soup: getRandomCards(),
    Desserts: getRandomCards(),
  },
  subheading = "",
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Subheader>{subheading}</Subheader>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  href={card.url}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRatingContainer>
                      <CardRating>
                        <StarIcon />
                        {card.rating}
                      </CardRating>
                      <CardReview>({card.reviews})</CardReview>
                    </CardRatingContainer>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto",
                        },
                        rest: {
                          opacity: 0,
                          height: 0,
                        },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>Buy Now</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>{card.price}</CardPrice>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://www.estehindonesia.com/storage/app/banners/FKytbUpvCr1DA7JWZAkRXPho48SoEe.jpg",
      title: "The Original",
      content: "Local Original One",
      price: "RP, 15.000",
      rating: "5.0",
      reviews: "87",
      url: "#",
    },
    {
      imageSrc:
        "https://www.estehindonesia.com/storage/app/banners/POUAOJ3hKd0bQ9xymzOqdjqxoU2qRM.jpg",
      title: "lychee Tea",
      content: "The splash touch into youre heart",
      price: "RP, 23.000",
      rating: "4.5",
      reviews: "34",
      url: "#",
    },
    {
      imageSrc:
        "https://www.estehindonesia.com/storage/app/banners/oxrZBlhQauCZvRENRhwTrae3AvA4pI.jpg",
      title: "Avocado Tea",
      content: "Combination of Avocado an Teas",
      price: "RP, 20.000",
      rating: "3.9",
      reviews: "26",
      url: "#",
    },
    {
      imageSrc:
        "https://www.estehindonesia.com/storage/app/banners/vrZNMGAFrbm3XsfCaWoNAeUuN6vfVJ.jpg",
      title: "Thai Tea",
      content: "Mixed culture of Thai",
      price: "RP, 17.000",
      rating: "4.2",
      reviews: "95",
      url: "#",
    },
    {
      imageSrc:
        "https://www.estehindonesia.com/storage/app/banners/vyaVsCbmxNcQFxSizmFfcgL41wgKK6.jpg",
      title: "Jasmine Tea",
      content: "Refreshing jasmine scent",
      price: "RP, 16.000",
      rating: "5.0",
      reviews: "61",
      url: "#",
    },
    {
      imageSrc:
        "https://www.estehindonesia.com/storage/app/banners/AGhtbBrz5Spy9v2vUkpszht5Nmnm6b.jpg",
      title: "Manggo Tea",
      content: "Combination of Manggo and Tea",
      price: "RP, 20.000  ",
      rating: "4.9",
      reviews: "89",
      url: "#",
    },
    {
      imageSrc:
        "https://www.estehindonesia.com/storage/app/banners/KZiK6G6ykXLWhRUeOLyQYhTyMv2S2o.jpg",
      title: "Lemonade Berry",
      content: "Refreshing Lemonade Berry",
      price: "RP, 16.000",
      rating: "4.6",
      reviews: "12",
      url: "#",
    },
    {
      imageSrc:
        "https://www.estehindonesia.com/storage/app/banners/eWVZZiVp8mBBeRr7iQMAINAdrVy7sl.jpg",
      title: "Strawberry Seasalt Matcha",
      content: "Combination of Strawberry and Matcha",
      price: "RP, 25.000",
      rating: "4.2",
      reviews: "19",
      url: "#",
    },
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
