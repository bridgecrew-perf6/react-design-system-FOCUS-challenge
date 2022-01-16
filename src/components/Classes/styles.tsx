import Slider from "react-slick";
import styled from "styled-components";

export const StlyedSlider = styled(Slider)`
  .slick-arrow {
    top: 50%;
    transform: translateY(-200%);
    &:hover {
      svg {
        background-color: #afafaf44;
      }
    }
    ::before {
      content: none;
    }
  }
`;
