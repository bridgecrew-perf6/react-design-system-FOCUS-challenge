import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, TitleBox, BannerWrapper } from "./styles";
import CardComponent from "../Card";
import {
  Body1,
  Button,
  ButtonSize,
  ChevronLeftIcon,
  ChevronRightIcon,
  CoverRatio,
  Headline2,
  ProgressBar,
} from "@class101/ui";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 6600,
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
  const [barValue, setBarValue] = useState<number>(0);

  const sliderRef: any = useRef(null);

  const prev = useCallback(() => {
    sliderRef.current.slickPrev();
  }, []);

  const next = useCallback(() => {
    sliderRef.current.slickNext();
  }, []);

  const setBarValueZero = useCallback(() => {
    setBarValue(0);
  }, []);

  const resizeComponent = useMemo(() => {
    const bodyWidth = window.innerWidth;
    if (bodyWidth <= 640) {
      return CoverRatio.RATIO_16X9;
    } else {
      return CoverRatio.RATIO_16X10;
    }
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setBarValue(barValue + 10);
      if (barValue === 100) {
        setBarValue(0);
      }
    }, 600);
    return () => clearInterval(timerId);
  }, [barValue]);

  return (
    <Slider
      ref={sliderRef}
      {...{
        ...settings,
        dots: false,
        afterChange: () => {
          setBarValueZero();
        },
      }}
    >
      {data.map((el) => {
        return (
          <BannerWrapper
            key={el.id}
            colors={el.bgColor ? el.bgColor : "#243E57"}
            className="bannerWrapper"
          >
            <Container>
              <CardComponent img={el.img} coupon={el.badge} imageRatio={resizeComponent} />
              <TitleBox>
                <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
                  <p color="white">{el.title}</p>
                  <p color="#c0c0c0ad">{el.subtitle}</p>
                </a>
                <div className="progressBar">
                  <span>{`${el.id} | ${data.length}`}</span>
                  <ProgressBar
                    height={1}
                    value={barValue}
                    barColor={"#ffffff"}
                    backgroundColor={"#ffffff8d"}
                  />
                  <button onClick={prev}>
                    <ChevronLeftIcon fillColor="#fff" />
                  </button>
                  <button onClick={next}>
                    <ChevronRightIcon fillColor="#fff" />
                  </button>
                </div>
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
    <Slider {...settings}>
      {data.map((el) => {
        return (
          <BannerWrapper key={el.id} colors={el.bgColor ? el.bgColor : "#243E57"} location="bottom">
            <TitleBox>
              <Headline2>{el.title}</Headline2>
              <Body1 className="body1" color={"black"}>
                {el.subtitle}
              </Body1>
              <Button
                className="seeMore"
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
