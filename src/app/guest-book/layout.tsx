import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default Layout;
