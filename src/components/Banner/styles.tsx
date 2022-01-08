import styled from "styled-components";
import Slider from "react-slick";

export const BannerWrapper = styled.div<{
  colors: string;
}>`
  display: flex !important;
  position: relative;
  background: ${(props) => props.colors};
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    width: 50%;
    padding-left: 48px;
    padding-bottom: 32px;
    z-index: 1;
  }
`;

export const StyledSlider = styled(Slider)``;

export const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 32px;
  .slick-slide {
    display: inline-block;
  }
`;
