import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, ProgressBox, TitleBox, BannerWrapper } from "./styles";
import CardComponent from "../Card";
import { ProgressBar } from "@class101/ui";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
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
                    value={90}
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
