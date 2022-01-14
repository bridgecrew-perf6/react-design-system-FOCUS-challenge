import { SearchIcon, IconButton, Input } from "@class101/ui";
import {
  ClassOrStore,
  StyledFormGroup,
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledNavigation,
  Logo,
} from "./styles";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeaderContainer>
        <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
          <Logo>CLASS101</Logo>
        </a>
        <ClassOrStore>
          <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
            <h4>클래스</h4>
          </a>
          <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
            <h4>스토어</h4>
          </a>
        </ClassOrStore>
        <StyledFormGroup label="" inline>
          <Input placeholder="찾으시는 취미가 있으신가요?" />
          <IconButton
            onClick={() =>
              (window.location.href =
                "https://github.com/soonki-98/react-design-system-FOCUS-challenge")
            }
            icon={<SearchIcon />}
          />
        </StyledFormGroup>
        <StyledNavigation>
          <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
            <span>크리에이터 지원</span>
          </a>
          <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
            <span>기업교육</span>
          </a>
          <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
            <span>로그인</span>
          </a>
        </StyledNavigation>
      </StyledHeaderContainer>
    </StyledHeaderWrapper>
  );
};
export default Header;
