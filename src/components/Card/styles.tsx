import { Badge } from "@class101/ui";
import styled from "styled-components";

export const StyledBanner = styled(Badge)`
  width: 100%;
  margin-bottom: 8px;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    span {
      display: flex;
      align-items: center;
    }
  }
`;
