import Link from "next/link";
import { FooterItem } from "./FooterItem";
import { CircleX, Download, GitBranch, TriangleAlert } from "lucide-react";
import { portfolioRepositoryLink } from "@/constants/links";

function EditorFooter() {
  return (
    <footer className="flex border-t border-editor-divider justify-between">
      <div className="flex divide-x divide-editor-divider border-r border-editor-divider">
        <Link href={portfolioRepositoryLink} target="_blank">
          <FooterItem>
            <GitBranch size={12} />
            main
          </FooterItem>
        </Link>
        <FooterItem>
          <CircleX size={12} />0
          <TriangleAlert size={12} />0
        </FooterItem>
      </div>
      <div className="flex divide-x divide-editor-divider border-l border-editor-divider">
        <Link href="/resume.pdf" target="_blank">
          <FooterItem>
            <Download size={12} />
            resume.pdf
          </FooterItem>
        </Link>
      </div>
    </footer>
  );
}

export { EditorFooter };
