"use client";
import React, { createContext, useEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";

const PreviousPathContext = createContext<string | null>(null);

function PreviousPathProvider({ children }: { children: ReactNode }) {
  const asPath = usePathname();

  const ref = useRef<string | null>(null);

  useEffect(() => {
    ref.current = asPath;
  }, [asPath]);

  return (
    <PreviousPathContext.Provider value={ref.current}>
      {children}
    </PreviousPathContext.Provider>
  );
}

export { PreviousPathProvider, PreviousPathContext };
