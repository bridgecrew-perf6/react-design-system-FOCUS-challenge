import styled from "styled-components";

export const StlyedCategoryNav = styled.div<{
  show: string;
}>`
  display: ${(props) => (props.show === "invisible" ? "none" : "flex")};
  position: absolute;
  background-color: white;
  top: 50px;
  left: -20px;
  z-index: 41;
  ul {
    padding: 8px 20px;
  }
  li {
    width: 100%;
    padding: 4px 20px !important;
    font-weight: normal;
    &:hover {
      background-color: #ebebeb;
      padding: 4px 20px;
    }
  }
  li:nth-of-type(1) {
    font-size: 80%;
    color: #b4b4b4;
    &:hover {
      background-color: white;
    }
  }
`;
