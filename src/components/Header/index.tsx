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
        <Logo>CLASS101</Logo>
        <ClassOrStore>
          <h4>클래스</h4>
          <h4>스토어</h4>
        </ClassOrStore>
        <StyledFormGroup label="" inline>
          <Input placeholder="찾으시는 취미가 있으신가요?" />
          <IconButton icon={<SearchIcon />} />
        </StyledFormGroup>
        <StyledNavigation>
          <span>크리에이터 지원</span>
          <span>기업교육</span>
          <span>로그인</span>
        </StyledNavigation>
      </StyledHeaderContainer>
    </StyledHeaderWrapper>
  );
};
export default Header;
