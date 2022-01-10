import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "../Card";
import { CoverRatioType, Section } from "@class101/ui";

interface Props {
  data: Array<{
    id: number;
    title: string;
    creator?: string;
    img: string;
    like?: number;
    thumsUp?: number;
    price?: {
      originalPrice: number;
      salePrice: number;
      installment: number;
    };
    coupon?: number;
    period?: {
      startDate: string;
      finishDate: string;
    };
  }>;
  title: string;
  imageRatio?: CoverRatioType;
  slidesToShow?: number;
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplaySpeed: 6000,
  swipeToSlide: true,
};

const Classes = ({ data, title, imageRatio, slidesToShow = 4 }: Props) => {
  return (
    <Section title={title}>
      <Slider {...{ ...settings, slidesToShow }}>
        {data.map((el) => {
          return (
            <CardComponent
              key={el.id}
              title={el.title}
              creator={el.creator}
              img={el.img}
              like={el.like}
              thumsUp={el.thumsUp}
              price={el.price}
              coupon={el.coupon ? `${el.coupon}만원 쿠폰` : undefined}
              imageRatio={imageRatio}
              period={el.period}
            />
          );
        })}
      </Slider>
    </Section>
  );
};

export default Classes;
