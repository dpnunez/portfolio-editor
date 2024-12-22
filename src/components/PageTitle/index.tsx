import { HTMLAttributes } from "react";

function PageTitle({ children }: HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className="text-3xl font-bold">{children}</h1>;
}

export { PageTitle };
