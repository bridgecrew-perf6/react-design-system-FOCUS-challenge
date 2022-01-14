import { StlyedCategoryNav } from "./styles";

interface Props {
  show?: string;
}

const categories = ["넘블 FE 챌린지", "FOCUS", "React", "Design", "System"];

const CategoryNav = ({ show = "invisible" }: Props) => {
  return (
    <StlyedCategoryNav show={show}>
      <ul>
        {categories.map((category, idx) => {
          return (
            <li
              key={idx}
              onClick={() =>
                (window.location.href =
                  "https://github.com/soonki-98/react-design-system-FOCUS-challenge")
              }
            >
              {category}
            </li>
          );
        })}
      </ul>
    </StlyedCategoryNav>
  );
};

export default CategoryNav;
