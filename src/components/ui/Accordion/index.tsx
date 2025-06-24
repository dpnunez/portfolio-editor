"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, type Transition } from "motion/react";
import { cn } from "@/utils/styles";

type AccordionItemContextType = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

const AccordionItemContext = React.createContext<
  AccordionItemContextType | undefined
>(undefined);

const useAccordionItem = (): AccordionItemContextType => {
  const context = React.useContext(AccordionItemContext);
  if (!context) {
    throw new Error("useAccordionItem must be used within an AccordionItem");
  }
  return context;
};

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <AccordionItemContext.Provider value={{ isOpen, setIsOpen }}>
      <AccordionPrimitive.Item
        ref={ref}
        className={cn("border-b border-editor-divider", className)}
        {...props}
      >
        {children}
      </AccordionPrimitive.Item>
    </AccordionItemContext.Provider>
  );
});
AccordionItem.displayName = "AccordionItem";

interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  transition?: Transition;
  chevron?: boolean;
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, transition, chevron = true, ...props }, ref) => {
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  React.useImperativeHandle(ref, () => triggerRef.current as HTMLButtonElement);
  const { isOpen, setIsOpen } = useAccordionItem();

  React.useEffect(() => {
    const node = triggerRef.current;
    if (!node) return;

    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.attributeName === "data-state") {
          const currentState = node.getAttribute("data-state");
          setIsOpen(currentState === "open");
        }
      });
    });
    observer.observe(node, {
      attributes: true,
      attributeFilter: ["data-state"],
    });
    const initialState = node.getAttribute("data-state");
    setIsOpen(initialState === "open");
    return () => {
      observer.disconnect();
    };
  }, [setIsOpen]);

  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={triggerRef}
        className={cn(
          "flex flex-1 items-center justify-between transition-all [&[data-state=open]>.indicator]:rotate-180 overflow-hidden",
          className
        )}
        {...props}
      >
        {children}
        {chevron && (
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={
              transition ?? { type: "spring", stiffness: 150, damping: 22 }
            }
          >
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 indicator" />
          </motion.div>
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  transition?: Transition;
}

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, transition, ...props }, ref) => {
  const { isOpen } = useAccordionItem();

  return (
    <AnimatePresence>
      {isOpen && (
        <AccordionPrimitive.Content
          ref={ref}
          forceMount
          className="overflow-hidden"
          {...props}
        >
          <motion.div
            initial={{ height: 0, opacity: 0, "--mask-stop": "0%" }}
            animate={{ height: "auto", opacity: 1, "--mask-stop": "100%" }}
            exit={{ height: 0, opacity: 0, "--mask-stop": "0%" }}
            transition={
              transition ?? { type: "spring", stiffness: 150, damping: 22 }
            }
            style={{
              maskImage:
                "linear-gradient(black var(--mask-stop), transparent var(--mask-stop))",
              WebkitMaskImage:
                "linear-gradient(black var(--mask-stop), transparent var(--mask-stop))",
            }}
          >
            <div className={cn("pb-4 pt-0", className)}>{children}</div>
          </motion.div>
        </AccordionPrimitive.Content>
      )}
    </AnimatePresence>
  );
});

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  useAccordionItem,
};
