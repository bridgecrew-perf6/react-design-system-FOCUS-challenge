import styled from "styled-components";

export const StyledNavigationWrapper = styled.div`
  width: 100%;
`;

export const StyledNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 0px 11px;
  max-width: 1176px;
  @media (max-width: 1024px) {
    padding: 0px 24px;
  }
`;

export const EmptySpace = styled.div`
  min-height: 30px;
  width: 1px;
  margin-bottom: 12px;
  margin-right: 30px;
`;

export const RedDot = styled.div`
  position: absolute;
  height: 4px;
  width: 4px;
  border-radius: 2px;
  background: rgb(243, 33, 59);
  margin: 0;
  right: -6px;
  top: 0;
`;

export const StyledUl = styled.ul<{
  side: string;
}>`
  display: flex;
  margin: 0;
  padding: 0;
  li {
    display: flex;
    align-items: center;
    position: relative;
    padding-bottom: 9px;
    list-style: none;
    margin-right: 28px;
    font-weight: ${(props) => (props.side === "left" ? "bold" : "normal")};
    white-space: nowrap;
    color: rgb(26, 26, 26);
    cursor: pointer;
    &:hover {
      padding-bottom: 7px;
      border-bottom: 2px solid black;
      font-weight: ${(props) => props.side === "right" && "bold"};
    }
  }
  @media (max-width: 1024px) {
    display: ${(props) => props.side === "right" && "none"};
    li {
      font-size: 14px;
      font-weight: normal;
      line-height: 20px;
      letter-spacing: -0.15px;
      margin: 0px 16px 0px 0px;
      color: rgb(26, 26, 26);
    }
  }
`;
