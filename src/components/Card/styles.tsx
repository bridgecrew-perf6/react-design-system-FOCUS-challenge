import { Badge, Card } from "@class101/ui";
import styled from "styled-components";

export const SaleCouponBadge = styled(Badge)`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
`;

export const CardContainer = styled(Card)<{
  period: boolean;
}>`
  padding: 10px;
  margin-bottom: 32px;
  .likeIcon {
    padding: 5px;
    transition: 0.5s;
    border-radius: 50%;
    &:hover {
      background-color: #c4c4c42d;
    }
  }
  .period {
    display: flex;
    div {
      margin-right: 4px;
    }
  }
  .heartButton {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 3px;
    svg {
      width: 24px;
      height: 24px;
    }
    &:hover {
      background: #c4c4c42d;
    }
  }
`;
