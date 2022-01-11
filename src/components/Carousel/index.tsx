import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, TitleBox, BannerWrapper } from "./styles";
import CardComponent from "../Card";
import { Body1, Button, ButtonSize, Headline2 } from "@class101/ui";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 6000,
  arrows: true,
};

interface Props {
  data: Array<{
    id: number;
    title: string;
    subtitle: string;
    img: string;
    bgColor: string;
    badge?: string;
  }>;
}

export const TopCarousel = ({ data }: Props) => {
  return (
    <Slider {...settings}>
      {data.map((el) => {
        return (
          <BannerWrapper
            key={el.id}
            colors={el.bgColor ? el.bgColor : "#243E57"}
          >
            <Container>
              <CardComponent img={el.img} coupon={el.badge} />
              <TitleBox>
                <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
                  <p color="white">{el.title}</p>
                  <p color="#c0c0c0ad">{el.subtitle}</p>
                </a>
              </TitleBox>
            </Container>
          </BannerWrapper>
        );
      })}
    </Slider>
  );
};

export const BottomCarousel = ({ data }: Props) => {
  return (
    <Slider {...{ ...settings, dots: true }}>
      {data.map((el) => {
        return (
          <BannerWrapper
            key={el.id}
            colors={el.bgColor ? el.bgColor : "#243E57"}
            location="bottom"
          >
            <TitleBox>
              <Headline2>{el.title}</Headline2>
              <Body1 color={"black"}>{el.subtitle}</Body1>
              <Button
                size={ButtonSize.LARGE}
                to="https://github.com/soonki-98/react-design-system-FOCUS-challenge"
              >
                더 알아보기
              </Button>
            </TitleBox>
            <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
              <img alt="이미지" src={el.img} />
            </a>
          </BannerWrapper>
        );
      })}
    </Slider>
  );
};
