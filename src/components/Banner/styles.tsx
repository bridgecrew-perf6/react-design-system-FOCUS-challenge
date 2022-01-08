import styled from "styled-components";
import Slider from "react-slick";
import { ProgressBar } from "@class101/ui";

export const StyledSlider = styled(Slider)``;

export const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 32px;
  .slick-slide {
    display: inline-block;
  }
`;

export const StyledProgressiveBar = styled(ProgressBar)`
  overflow: hidden;
  padding: 0 !important;
  flex-grow: 1;
  div {
    width: 100% !important;
  }
`;

export const BannerWrapper = styled.div<{
  colors: string;
}>`
  display: flex !important;
  background: ${(props) => props.colors};
  width: 100%;
  div {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 50%;
    padding-left: 48px;
    padding-bottom: 32px;
    z-index: 1;
  }
`;
