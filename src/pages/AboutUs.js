import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import Hero from "components/hero/SingleColumnSimple";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
import Features from "components/features/ThreeColSimple2.js";

import imageSrc from "images/_dummy/background/bg_hero2.png";
import ImageAbout1 from "images/_dummy/square/square1.png";
import ImageAbout2 from "images/_dummy/square/square4.png";

import TeaCustomIcon from "images/icon/misc/tea-custom.svg";
import TeaQualityIcon from "images/icon/misc/tea-quality.svg";
import TeaPartyIcon from "images/icon/misc/tea-party.svg";

const HighlightedText = tw.span`text-primary-500 inline-block font-light`;
const imageCss = tw``;

export default () => {
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Our
            <wbr /> <HighlightedText>Story</HighlightedText>
          </>
        }
        description={
          <>
            {" "}
            Kami bermimpi besar untuk membantu Anda mengejar peluang
            berwirausaha. Tidak ada bos, tidak ada pekerjaan meja yang
            membosankan. Bayangkan saja aroma teh yang baru diseduh dan senyum
            pelanggan yang senang. Ini adalah impian jutaan orang. Toko teh Anda
            sendiri.
          </>
        }
        imageCsss={imageCss}
        imageSrc={imageSrc}
        primaryButtonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
      />
      <MainFeature1
        subheading={<>#tehlokal #tehterbaik</>}
        heading={
          <>
            Dibuat
            <wbr /> <HighlightedText>Untuk Yang Terbaik</HighlightedText>
          </>
        }
        description={
          <>
            <>
              Kualitas adalah segalanya, jadi pasangan ini pergi ke dataran
              tinggi Taiwan untuk mendapatkan daun teh asli Taiwan yang terkenal
              dengan kualitas terbaik dan aroma yang kuat serta untuk
              mengembangkan busa keju yang paling lezat dan kaya rasa. Dengan
              bantuan seorang master teh Taiwan, duo ini bekerja untuk
              merumuskan minuman teh keju terbaik yang akan segera dikenal di
              Indonesia.
            </>
          </>
        }
        buttonRounded={false}
        buttonHidden={true}
        primaryButtonText="See Portfolio"
        imageSrc={ImageAbout1}
      />
      <MainFeature1
        subheading={<>Visi Kami</>}
        heading={
          <>
            Target Untuk
            <wbr /> <HighlightedText>Semua Orang</HighlightedText>
          </>
        }
        buttonRounded={false}
        buttonHidden={true}
        primaryButtonText="Contact Us"
        imageSrc={ImageAbout2}
        textOnLeft={false}
      />
      <Features
        subheading={<>Menempatkan</>}
        heading={
          <>
            Kami
            <wbr /> <HighlightedText>Terapkan</HighlightedText>
          </>
        }
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
      <Footer />
    </AnimationRevealPage>
  );
};
