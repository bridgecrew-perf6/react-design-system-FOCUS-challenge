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
  div {
    width: 1px;
    min-height: 30px;
    margin: 0px 30px 12px 0px;
  }
  @media (max-width: 1024px) {
    padding: 18px 24px 8px;
  }
`;

export const StyledUl = styled.ul<{
  side: string;
}>`
  display: flex;
  margin: 0;
  padding: 0;
  li {
    display: flex;
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
`;
