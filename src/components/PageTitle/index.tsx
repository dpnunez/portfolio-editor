import { HTMLAttributes } from "react";

function PageTitle({ children }: HTMLAttributes<HTMLHeadingElement>) {
  return <h1>{children}</h1>;
}

export { PageTitle };
