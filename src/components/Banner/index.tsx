import { BannerWrapper, StyledSlider, Wrap } from "./styles";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  const slides = [1, 2, 3, 4, 5];
  const colors = [
    "rgb(69, 81, 255)",
    "rgb(53, 95, 245)",
    "rgb(131, 27, 255)",
    "rgb(49, 29, 22)",
    "rgb(255, 184, 0)",
  ];
  return (
    <Wrap>
      <StyledSlider {...settings}>
        {slides.map((slide, idx) => {
          return (
            <BannerWrapper key={idx} colors={colors[idx]}>
              <div>{slide}</div>
              <div>
                <h3>슬라이드 {slide} !</h3>
                <p>
                  이벤트 설명{slide}
                  <br /> 이벤트 설명{slide}
                </p>
              </div>
            </BannerWrapper>
          );
        })}
      </StyledSlider>
    </Wrap>
  );
};

export default Banner;
