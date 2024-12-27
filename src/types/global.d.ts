declare global {
  interface Window {
    onloadTurnstileCallback: () => void;
  }

  const turnstile: {
    render: (
      containerId: string,
      options: {
        sitekey: string;
        callback: (token: string) => void;
        "error-callback": () => void;
        "expired-callback": () => void;
      }
    ) => void;
  };
}

export {};
