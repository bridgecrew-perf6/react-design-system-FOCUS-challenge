import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Example = ({ children }: Props) => {
  return <button>{children}</button>;
};

export default Example;
