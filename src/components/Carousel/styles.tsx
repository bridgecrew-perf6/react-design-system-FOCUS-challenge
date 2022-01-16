import styled from "styled-components";

export const BannerWrapper = styled.div<{
  colors: string;
  location?: string;
}>`
  display: ${(props) => (props.location === "bottom" ? "flex !important" : "block")};
  padding: ${(props) => props.location === "bottom" && "0 32px"};
  height: ${(props) => props.location === "bottom" && "206px"};
  align-items: center;
  width: 100%;
  overflow: hidden;
  margin-bottom: 32px;
  background-color: ${(props) => props.colors};
  button {
    margin-top: 32px;
    width: fit-content;
    a {
      display: ${(props) => (props.location === "bottom" ? "flex !important" : "block")};
      padding: ${(props) => props.location === "bottom" && 0};
    }
  }
  img {
    height: 206px;
  }
  @media (max-width: 1024px) {
    height: ${(props) => props.location === "bottom" && "322px"};
    align-items: flex-start;
    a {
      margin-top: auto;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1176px;
  margin: 0px auto;
  overflow-x: hidden;
  img {
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
  @media (max-width: 640px) {
    flex-direction: column-reverse;
    div:nth-of-type(1) {
      margin-bottom: 0;
    }
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  min-width: 50%;
  padding-left: 48px;
  padding-bottom: 32px;
  z-index: 1;
  .progressBar {
    position: relative;
    bottom: 3%;
    display: flex;
    align-items: center;
    span {
      margin-right: 10px;
      color: white;
    }
    button {
      margin: 0 10px;
      border: none;
      background: none;
      cursor: pointer;
      &:hover {
        background: #ffffff44;
      }
    }
  }
  a {
    display: block;
    max-width: 412px;
    flex: 1 1 0%;
    padding-top: 56px;
    word-break: keep-all;
  }
  p:nth-of-type(1) {
    display: flex;
    white-space: pre-line;
    -webkit-box-align: center;
    align-items: center;
    max-width: 380px;
    color: rgb(255, 255, 255);
    font-size: 34px;
    line-height: 44px;
    font-weight: bold;
    letter-spacing: -0.02rem;
    word-break: keep-all;
  }
  p:nth-of-type(2) {
    margin: 10px 0px 0px;
    white-space: pre-line;
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    line-height: 26px;
    max-width: 300px;
    font-weight: normal;
  }
  @media (max-width: 1024px) {
    padding-left: 0;
  }
  @media (max-width: 640px) {
    padding-bottom: 0;
    .progressBar {
      display: none;
    }
    a {
      padding: 1em;
    }
    p:nth-of-type(1) {
      font-size: 26px;
    }
  }
`;

export const ProgressBox = styled.div`
  margin-bottom: 30px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  span {
    display: flex;
    width: 50px;
    font-size: 12px;
    color: rgb(255, 255, 255);
    margin-right: 8px;
    cursor: default;
  }
`;
