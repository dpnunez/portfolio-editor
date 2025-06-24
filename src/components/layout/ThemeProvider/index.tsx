import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props} themes={["github-dark", "github-light"]}>
      {children}
    </NextThemesProvider>
  );
}

export { ThemeProvider };
