function SqlHighlight({ children }: { children: string }) {
  return <b className="font-bold text-editor-text-primary">{children}</b>;
}

export { SqlHighlight };
