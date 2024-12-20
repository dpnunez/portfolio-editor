interface FooterItemProps {
  children: React.ReactNode;
}

function FooterItem({ children }: FooterItemProps) {
  return <div className="px-6">{children}</div>;
}

export { FooterItem };
