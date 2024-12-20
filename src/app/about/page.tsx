import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Sidebar,
} from "@/components";

function Page() {
  return (
    <div>
      <Sidebar>
        <Accordion type="single" collapsible>
          <AccordionItem value="1">
            <AccordionTrigger>About</AccordionTrigger>
            <AccordionContent>toDo: add file tree.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </Sidebar>
    </div>
  );
}

export default Page;
