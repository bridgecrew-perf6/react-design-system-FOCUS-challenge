import { Badge, Card } from "@class101/ui";
import styled from "styled-components";

export const SaleCouponBadge = styled(Badge)`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
`;

export const CardContainer = styled(Card)`
  padding: 5px;
  .likeIcon {
    padding: 5px;
    transition: 0.5s;
    border-radius: 50%;
    &:hover {
      background-color: #c4c4c42d;
    }
  }
`;
