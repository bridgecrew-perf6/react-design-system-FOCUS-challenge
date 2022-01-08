import styled from "styled-components";

export const Wrap = styled.div<{
  colors: string;
}>`
  width: 100%;
  margin-bottom: 32px;
  background-color: ${(props) => props.colors};
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1176px;
  margin: 0 auto;
  overflow-x: hidden;
  align-items: center;
  img {
    width: auto;
    height: auto;
  }
  div:nth-of-type(1) {
    div {
      margin: 0;
    }
    div:nth-of-type(2) {
      display: none;
    }
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  min-width: 450px;
  max-width: 480px;
  padding-left: 48px;
  padding-bottom: 32px;
  z-index: 1;
`;

export const ProgressBox = styled.div``;
