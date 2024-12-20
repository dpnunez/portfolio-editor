import { FooterItem } from "./FooterItem";

function EditorFooter() {
  return (
    <footer className="flex border-t border-editor-divider justify-between">
      <div className="flex divide-x divide-editor-divider border-r border-editor-divider">
        <FooterItem>AB</FooterItem>
        <FooterItem>C</FooterItem>
        <FooterItem>D</FooterItem>
      </div>
      <div className="flex divide-x divide-editor-divider border-l border-editor-divider">
        <FooterItem>E</FooterItem>
        <FooterItem>F</FooterItem>
        <FooterItem>G</FooterItem>
      </div>
    </footer>
  );
}

export { EditorFooter };
