import { FormGroup } from "@class101/ui";
import styled from "styled-components";

export const StyledHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 0;
  width: 100%;
  border: 1px solid black;
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
`;
