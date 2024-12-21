"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  ReactNode,
} from "react";
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

function usePreviousPath() {
  const context = useContext(PreviousPathContext);
  if (!context) {
    throw new Error(
      "usePreviousPath must be used within a PreviousPathProvider"
    );
  }
  return context;
}

export { usePreviousPath, PreviousPathProvider };
