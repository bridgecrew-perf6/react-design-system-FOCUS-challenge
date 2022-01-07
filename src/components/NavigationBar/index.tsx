import { DropDown } from "@class101/ui/dist/Icon/export-legacy.generated";
import {
  EmptySpace,
  RedDot,
  StyledNavigationContainer,
  StyledNavigationWrapper,
  StyledUl,
} from "./styles";

const NavigationBar = () => {
  return (
    <StyledNavigationWrapper>
      <StyledNavigationContainer>
        <StyledUl side="left">
          <li>
            전체 카테고리 <DropDown />
          </li>
          <li>
            1월 가입혜택
            <RedDot />
          </li>
          <li>이벤트</li>
          <li>바로 수강</li>
          <li>신규 클래스</li>
          <li>오픈 에정</li>
        </StyledUl>
        <EmptySpace />
        <StyledUl side="right">
          <li>시그니처</li>
          <li>키즈</li>
          <li>원포인트 클래스</li>
        </StyledUl>
      </StyledNavigationContainer>
    </StyledNavigationWrapper>
  );
};
export default NavigationBar;
