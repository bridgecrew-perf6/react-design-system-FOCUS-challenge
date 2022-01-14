import { DropDown } from "@class101/ui/dist/Icon/export-legacy.generated";
import { useCallback, useState } from "react";
import CategoryNav from "../CategoryNav";
import {
  EmptySpace,
  RedDot,
  StyledNavigationContainer,
  StyledNavigationWrapper,
  StyledUl,
} from "./styles";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState<string>("invisible");
  const openCategoryNav = useCallback(() => {
    setIsOpen("visible");
  }, []);
  const closeCategoryNav = useCallback(() => {
    setIsOpen("invisible");
  }, []);
  return (
    <StyledNavigationWrapper>
      <StyledNavigationContainer>
        <StyledUl side="left">
          <li
            className="all-category"
            onMouseOver={openCategoryNav}
            onMouseOut={closeCategoryNav}
          >
            <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
              전체 카테고리 <DropDown />
            </a>
            <CategoryNav show={isOpen} />
          </li>
          <li>
            <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
              1월 가입혜택
              <RedDot />
            </a>
          </li>
          <li>
            <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
              이벤트
            </a>
          </li>
          <li>
            <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
              바로 수강
            </a>
          </li>
          <li>
            <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
              신규 클래스
            </a>
          </li>
          <li>
            <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
              오픈 에정
            </a>
          </li>
        </StyledUl>
        <EmptySpace />
        <StyledUl side="right">
          <li>
            <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
              시그니처
            </a>
          </li>
          <li>
            <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
              키즈
            </a>
          </li>
          <li>
            <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
              원포인트 클래스
            </a>
          </li>
        </StyledUl>
      </StyledNavigationContainer>
    </StyledNavigationWrapper>
  );
};
export default NavigationBar;
