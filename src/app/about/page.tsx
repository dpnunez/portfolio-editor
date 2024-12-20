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
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Sidebar>
    </div>
  );
}

export default Page;
