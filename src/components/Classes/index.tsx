import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "../Card";
import { ChevronLeftIcon, ChevronRightIcon, CoverRatioType, Section } from "@class101/ui";
import { StlyedSlider } from "./styles";

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
    cheer?: {
      goal: number;
      score: number;
      finishDate: string;
    };
  }>;
  title: string;
  imageRatio?: CoverRatioType;
  slidesToShow?: number;
}

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  autoplaySpeed: 6000,
  swipeToSlide: true,
  arrows: true,
};

function NextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronRightIcon />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ChevronLeftIcon />
    </div>
  );
}

const Classes = ({ data, title, imageRatio, slidesToShow = 4 }: Props) => {
  return (
    <Section title={title}>
      <StlyedSlider
        {...{
          ...settings,
          slidesToShow,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        }}
      >
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
              cheer={el.cheer}
            />
          );
        })}
      </StlyedSlider>
    </Section>
  );
};

export default Classes;
