interface FooterItemProps {
  children: React.ReactNode;
}

function FooterItem({ children }: FooterItemProps) {
  return (
    <div className="px-6 flex items-center gap-2 hover:bg-editor-background-highlight transition-all">
      {children}
    </div>
  );
}

export { FooterItem };
