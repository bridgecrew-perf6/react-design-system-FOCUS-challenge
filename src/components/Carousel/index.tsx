import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, ProgressBox, TitleBox, BannerWrapper } from "./styles";
import CardComponent from "../Card";
import { ProgressBar } from "@class101/ui";
import { useEffect, useState } from "react";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
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

const CarouselComponent = ({ data }: Props) => {
  const [progressValue, setProgressValue] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progressValue < 100) setProgressValue((count) => count + 10);
      else setProgressValue(0);
    }, 600);
    return () => clearInterval(timer);
  }, [progressValue]);

  return (
    <Slider {...{ ...settings }}>
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
                <ProgressBox>
                  <span color="white">{`${el.id} | ${data.length}`}</span>
                  <ProgressBar
                    height={1}
                    value={progressValue}
                    barColor="white"
                    backgroundColor="rgba(255, 255, 255, 0.3)"
                  />
                </ProgressBox>
              </TitleBox>
            </Container>
          </BannerWrapper>
        );
      })}
    </Slider>
  );
};

export default CarouselComponent;
