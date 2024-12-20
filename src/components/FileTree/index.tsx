import { fileTreeType } from "@/types/fileTree";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";

interface FileTreeProps {
  files: fileTreeType;
  className?: string;
}

function FileTree({ files, className }: FileTreeProps) {
  return (
    <div className={className}>
      {files.map((item) => {
        const isFolder = item.type === "folder";
        if (isFolder)
          return (
            <Accordion key={item.name} type="single" collapsible>
              <AccordionItem value="1" className="border-b-0">
                <AccordionTrigger className="[&>.indicator]:hidden">
                  [folder]
                  {item.name}
                </AccordionTrigger>
                <AccordionContent className="pb-0">
                  <FileTree className="ml-4" files={item.children} />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        return <div key={item.name}>{item.name}</div>;
      })}
    </div>
  );
}

export { FileTree };
