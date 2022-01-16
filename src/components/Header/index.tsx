import { SearchIcon, IconButton, Input } from "@class101/ui";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ClassOrStore,
  StyledFormGroup,
  StyledHeaderContainer,
  StyledHeaderWrapper,
  StyledNavigation,
  Logo,
} from "./styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref: any = useRef(null);

  const closeTooltip = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openTooltip = useCallback(() => {
    setIsOpen(true);
  }, []);

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "unset";
  }, [isOpen]);

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
