import {
  FileIcon as LucideFileIcon,
  FileTextIcon,
  FileJsonIcon,
  FileCodeIcon,
  FileTypeIcon,
  FileIcon as FileHtmlIcon,
  FileIcon as FileCssIcon,
  ImageIcon,
  VideoIcon,
  MusicIcon,
  ArchiveIcon,
  StickyNoteIcon,
  PresentationIcon,
  FileTextIcon as FileDocumentIcon,
} from "lucide-react";

interface FileIconProps {
  name: string;
  size?: number;
}

function FileIcon({ name, size = 16 }: FileIconProps) {
  const extension = name.split(".").pop()?.toLowerCase();

  switch (extension) {
    case "ts":
    case "tsx":
    case "js":
    case "jsx":
      return <FileCodeIcon size={size} />;
    case "html":
      return <FileHtmlIcon size={size} />;
    case "css":
    case "scss":
    case "sass":
      return <FileCssIcon size={size} />;
    case "json":
      return <FileJsonIcon size={size} />;
    case "md":
    case "txt":
      return <FileTextIcon size={size} />;
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
    case "svg":
    case "webp":
      return <ImageIcon size={size} />;
    case "mp4":
    case "webm":
    case "mov":
      return <VideoIcon size={size} />;
    case "mp3":
    case "wav":
    case "ogg":
      return <MusicIcon size={size} />;
    case "zip":
    case "rar":
    case "7z":
    case "tar":
    case "gz":
      return <ArchiveIcon size={size} />;
    case "csv":
    case "xls":
    case "xlsx":
      return <StickyNoteIcon size={size} />;
    case "ppt":
    case "pptx":
      return <PresentationIcon size={size} />;
    case "doc":
    case "docx":
    case "pdf":
      return <FileDocumentIcon size={size} />;
    case "d.ts":
      return <FileTypeIcon size={size} />;
    default:
      return <LucideFileIcon size={size} />;
  }
}

export { FileIcon }; 