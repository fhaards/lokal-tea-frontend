import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage";

import Hero from "components/hero/HeroTwoColBackground";
import Features from "components/features/ThreeColSimple2";
import FeaturesStep from "components/features/SingleColWithSteps";
import FeaturesSlider from "components/hero/SliderPromotion";
import FeaturesAbout from "components/features/TwoColSimple";
import ProductGrid from "components/cards/products/ProductGridList";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage";
import Footer from "components/footers/FiveColumnWithInputForm";

import heroImage1 from "images/_dummy/square/tea_display_1.png";
import TeaCustomIcon from "images/icon/misc/tea-custom.svg";
import TeaQualityIcon from "images/icon/misc/tea-quality.svg";
import TeaPartyIcon from "images/icon/misc/tea-party.svg";

/** Setup Background */
import imgAbout from "images/_dummy/square/square_about_home.png";
export default () => {
  const HighlightedText = tw.span`text-primary-500 inline-block font-normal`;
  const imageCss = tw`md:opacity-100 opacity-75`;

  return (
    <AnimationRevealPage childern={["img"]}>
      <Hero
        heading={
          <>
            A <span> Simple</span> cup of <span>Tea</span> is far from a{" "}
            <span>Simple</span> matter
            <br />
            <br />
          </>
        }
        subHeading={
          <>
            <span>#indonesia</span> #autenthic #localtea
          </>
        }
        imageCss={imageCss}
        heroImage={heroImage1}
        textOnLeft={true}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`hidden md:inline-block right-0 md:top-0 md:bottom-1/2  w-144 h-144 md:w-6/12 md:h-10/12 opacity-25 `}
        primaryButtonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
      />

      <Features
        cards={[
          {
            imageSrc: TeaCustomIcon,
            title: "Kustom Teh",
            description:
              "Kustom Teh sesuai imajinasi kamu dengan topping dan bahan bahan yang berbeda",
          },
          {
            imageSrc: TeaQualityIcon,
            title: "Kualitas",
            description:
              "Bahan bahan Lokal namun mengutamakan Kualitas yang terjamin",
            url: "https://timerse.com",
          },
          {
            imageSrc: TeaPartyIcon,
            title: "Teman Pesta",
            description: "Meriahkan dan Temani pestamu dengan teh dari kami",
            url: "https://reddit.com",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20! `}
      />

      <FeaturesStep
        subheading={<>Alur Persiapan</>}
        heading={
          <>
            #Buka <HighlightedText> Outlet </HighlightedText>
          </>
        }
        steps={[
          {
            heading: "Komitmen",
            description: "Berkomitmen untuk yang terbaik",
          },
          {
            heading: "Survei Lokasi",
            description: "Kita bantu menemukan tempat terbaik",
          },
          {
            heading: "Desain Pembangunan",
            description: "Desain pembangunan untuk outlet baru",
          },
          {
            heading: "Pembayaran Ulang",
            description: "Pelunasan untuk pembangunan outlet baru",
          },
          {
            heading: "Equipment & Bahan",
            description: "Pengiriman equipment dan bahan untuk outlet baru",
          },
          {
            heading: "Latihan Karyawan",
            description: "Melatih Karyawan baru",
          },
          {
            heading: "Pembukaan Outlet",
            description:
              "Selamat, Outlet baru telah anda miliki. Semoga sukses :)",
          },
        ]}
        textOnLeft={true}
      />

      <FeaturesSlider heading={<></>} />

      <FeaturesAbout
        subheading={<>Didirikan 2022</>}
        heading={
          <>
            Cerita <HighlightedText> Kami</HighlightedText>
          </>
        }
        description={
          <>
            Di jalan kehidupan apa pun yang Anda jalani, teh dapat melayani
            tujuan itu. Kami benar-benar percaya bahwa saat Anda melangkah
            bersama kami, kami dapat menemukan teh khusus untuk momen spesial
            Anda
            <br />
          </>
        }
        buttonRounded={false}
        buttonHidden={true}
        textOnLeft={false}
        primaryButtonText="Farmer"
        primaryButtonUrl="https://facebook.com"
        imageSrc={imgAbout}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`right-1/2 -translate-x-1/2 md:w-64 md:h-64 opacity-25`}
      />

      {/* ProductGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the ProductGrid component file to see the structure of the tabs props.*/}

      <ProductGrid
        subheading={<>Menu</>}
        heading={
          <>
            Teh <HighlightedText> Lokal</HighlightedText>
          </>
        }
      />

      <Testimonial
        subheading={<>Testimonial</>}
        heading={
          <>
            Dari <HighlightedText> Mereka</HighlightedText>
          </>
        }
      />

      <Footer />
    </AnimationRevealPage>
  );
};
