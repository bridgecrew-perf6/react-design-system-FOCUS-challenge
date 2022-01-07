import { SearchIcon, IconButton, Input } from "@class101/ui";
import { StyledFormGroup, StyledHeaderWrapper } from "./styles";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledFormGroup label="" inline>
        <Input placeholder="찾으시는 취미가 있으신가요?" />
        <IconButton icon={<SearchIcon />} />
      </StyledFormGroup>
    </StyledHeaderWrapper>
  );
};
export default Header;
