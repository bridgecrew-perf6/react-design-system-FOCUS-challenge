import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, ProgressBox, TitleBox, Wrap } from "./styles";
import CardComponent from "@components/Card";
import { Body1, Headline2, ProgressBar, Subtitle1 } from "@class101/ui";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
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
    <Slider {...settings}>
      {data.map((el) => {
        return (
          <Wrap key={el.id} colors={el.bgColor ? el.bgColor : "blue"}>
            <Container>
              <CardComponent img={el.img} coupon={el.badge} />
              <TitleBox>
                <a>
                  <Headline2 color="white">{el.title}</Headline2>
                  <Subtitle1 color="#c0c0c0ad">{el.subtitle}</Subtitle1>
                </a>
                <ProgressBox>
                  <Body1 color="white">{`${el.id} | ${data.length}`}</Body1>
                  <ProgressBar height={1} value={90} />
                </ProgressBox>
              </TitleBox>
            </Container>
          </Wrap>
        );
      })}
    </Slider>
  );
};

export default CarouselComponent;
