import { SearchIcon, IconButton, Input } from "@class101/ui";
import { useCallback, useEffect, useRef } from "react";
import {
  ClassOrStore,
  StyledFormGroup,
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledNavigation,
  Logo,
} from "./styles";

interface Props {
  isOpen: boolean;
  closeTooltip: () => void;
  openTooltip: () => void;
}

const Header = ({ isOpen, closeTooltip, openTooltip }: Props) => {
  const ref: any = useRef(null);

  const handleClickOutside = useCallback(
    (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closeTooltip();
      }
    },
    [closeTooltip]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <StyledHeaderWrapper ref={ref}>
      <StyledHeaderContainer>
        <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
          <Logo>CLASS101</Logo>
        </a>
        {!isOpen && (
          <ClassOrStore>
            <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
              <h4>클래스</h4>
            </a>
            <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
              <h4>스토어</h4>
            </a>
          </ClassOrStore>
        )}
        <StyledFormGroup label="" inline>
          <Input placeholder="찾으시는 취미가 있으신가요?" onFocus={openTooltip} />
          <IconButton
            type="submit"
            onClick={() =>
              (window.location.href =
                "https://github.com/soonki-98/react-design-system-FOCUS-challenge")
            }
            icon={<SearchIcon />}
          />
        </StyledFormGroup>
        {isOpen && (
          <span style={{ cursor: "pointer" }} onClick={closeTooltip}>
            취소
          </span>
        )}
        <StyledNavigation>
          {!isOpen && (
            <>
              <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
                <span>크리에이터 지원</span>
              </a>
              <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
                <span>기업교육</span>
              </a>
              <a href="https://github.com/soonki-98/react-design-system-FOCUS-challenge">
                <span>로그인</span>
              </a>
            </>
          )}
        </StyledNavigation>
      </StyledHeaderContainer>
      {isOpen && <div className="tooltip">tooltip</div>}
    </StyledHeaderWrapper>
  );
};
export default Header;
