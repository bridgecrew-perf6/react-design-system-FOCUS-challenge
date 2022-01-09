import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "../Card";
import { CoverRatioType } from "@class101/ui";

interface Props {
  data: Array<{
    id: number;
    title: string;
    creator: string;
    img: string;
    like: number;
    thumsUp: number;
    price: {
      originalPrice: number;
      salePrice: number;
      installment: number;
    };
    coupon: number;
  }>;
  title: string;
  imageRatio?: CoverRatioType;
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 6000,
};

const Classes = ({ data, title, imageRatio }: Props) => {
  return (
    <>
      <h1>{title}</h1>
      <Slider {...settings}>
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
              coupon={`${el.coupon}만원 쿠폰`}
              imageRatio={imageRatio}
            />
          );
        })}
      </Slider>
    </>
  );
};

export default Classes;
