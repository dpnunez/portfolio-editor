"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const useStateViaQueryParams = <T extends string | string[]>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, setState] = useState<T>(() => {
    const value = searchParams.get(key);
    if (Array.isArray(defaultValue)) {
      return (value ? value.split(",") : defaultValue) as T;
    }
    return (value || defaultValue) as T;
  });

  useEffect(() => {
    const url = new URL(window.location.href);
    const newState = Array.isArray(state) ? state.join(",") : (state as string);
    url.searchParams.set(key, newState);
    if (!newState || newState?.length === 0) {
      url.searchParams.delete(key);
    }
    router.push(url.toString());
  }, [key, state, router]);

  return [state, setState];
};

export { useStateViaQueryParams };
export default useStateViaQueryParams;
