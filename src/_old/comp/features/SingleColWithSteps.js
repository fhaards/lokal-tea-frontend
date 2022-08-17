import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
const Container = tw.div`relative`;
const SingleColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)((props) => [
  tw`md:w-full mt-16 md:mt-0`,
  props.textOnLeft ? tw`` : tw``,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left w-full`;
const Subheading = tw(SubheadingBase)`text-center md:text-center`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-center leading-tight`;
const Steps = tw.ul`mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 `;
const Step = tw.li`flex flex-col md:flex-row items-center md:items-start bg-gray-100 p-5`;
const StepNumber = tw.div`font-semibold text-4xl leading-none text-primary-400`;
const StepText = tw.div`mt-3 md:mt-0 md:ml-6`;
const StepHeading = tw.h6`leading-none text-xl font-semibold`;
const StepDescription = tw.p`mt-3 max-w-xs leading-none text-sm text-gray-600 font-medium`;

export default ({
  subheading = "Our Expertise",
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  textOnLeft = true,
  steps = null,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const defaultSteps = [
    {
      heading: "Register",
      description: "Create an account with us using Google or Facebook.",
    },
    {
      heading: "Download",
      description:
        "Browse and Download the template that you like from the marketplace.",
    },
    {
      heading: "Run",
      description:
        "Follow the instructions to setup and customize the template to your needs.",
    },
  ];

  if (!steps) steps = defaultSteps;

  return (
    <Container>
      <SingleColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>{heading}</Heading>
            <Steps>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepNumber>
                    {(index + 1).toString().padStart(2, "0")}
                  </StepNumber>
                  <StepText>
                    <StepHeading>{step.heading}</StepHeading>
                    <StepDescription>{step.description}</StepDescription>
                  </StepText>
                </Step>
              ))}
            </Steps>
          </TextContent>
        </TextColumn>
      </SingleColumn>
    </Container>
  );
};
