import { FormGroup } from "@class101/ui";
import styled from "styled-components";

export const StyledHeaderWrapper = styled.header`
  width: 100%;
  h4 {
    white-space: nowrap;
    margin: 0;
    font-size: 1.5em;
  }
  @media (max-width: 1024px) {
    h4 {
      font-size: 1.25em;
      line-height: 1.625em;
    }
  }
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
  max-width: 1176px;
  @media (max-width: 1024px) {
    padding: 18px 24px 8px;
  }
`;

export const StyledFormGroup = styled(FormGroup)`
  margin: 0;
  position: relative;
  width: 420px;
  div {
    width: 100%;
  }
  input {
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    background: rgb(248, 248, 248);
    border: 1px solid rgb(248, 248, 248);
    border-radius: 24px;
    padding: 12px 52px 12px 16px;
    &::placeholder {
      color: rgb(117, 117, 117);
    }
  }
  button {
    position: absolute;
    right: 16px;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ClassOrStore = styled.div`
  display: flex;
  margin-left: 28px;

  h4:nth-of-type(1) {
    color: #ff5600;
    margin-right: 16px;
  }
  h4:nth-of-type(2) {
    margin-right: 36px;
  }
`;

export const StyledNavigation = styled.div`
  display: flex;
  position: relative;
  margin-left: auto;
  span {
    font-size: 14px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
