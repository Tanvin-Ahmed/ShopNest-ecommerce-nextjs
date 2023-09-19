import { FC, ReactNode } from "react";

interface ContainerPropsType {
  children: ReactNode;
}

const Container: FC<ContainerPropsType> = ({ children }) => {
  return <div className="mx-auto container">{children}</div>;
};

export default Container;
