"use client";

import * as React from "react";
import { AnimatePresence, Transition, motion } from "motion/react";
import { cn } from "@/utils/styles";

type MotionHighlightMode = "children" | "parent";

type Bounds = {
  top: number;
  left: number;
  width: number;
  height: number;
};

type MotionHighlightContextType<T extends string> = {
  mode: MotionHighlightMode;
  activeValue: T | null;
  setActiveValue: (value: T | null) => void;
  setBounds: (bounds: DOMRect) => void;
  clearBounds: () => void;
  id: string;
  hover: boolean;
  className?: string;
  activeClassName?: string;
  setActiveClassName: (className: string) => void;
  transition?: Transition;
  disabled?: boolean;
  enabled?: boolean;
  exitDelay?: number;
  forceUpdateBounds?: boolean;
};

const MotionHighlightContext = React.createContext<
  MotionHighlightContextType<string> | undefined
>(undefined);

function useMotionHighlight<T extends string>(): MotionHighlightContextType<T> {
  const context = React.useContext(MotionHighlightContext);
  if (!context) {
    throw new Error(
      "useMotionHighlight must be used within a MotionHighlightProvider"
    );
  }
  return context as unknown as MotionHighlightContextType<T>;
}

type BaseMotionHighlightProps<T extends string> = {
  mode?: MotionHighlightMode;
  value?: T | null;
  defaultValue?: T | null;
  onValueChange?: (value: T | null) => void;
  className?: string;
  transition?: Transition;
  hover?: boolean;
  disabled?: boolean;
  enabled?: boolean;
  exitDelay?: number;
};

type ParentModeMotionHighlightProps = {
  boundsOffset?: Partial<Bounds>;
  containerClassName?: string;
  forceUpdateBounds?: boolean;
};

type ControlledParentModeMotionHighlightProps<T extends string> =
  BaseMotionHighlightProps<T> &
    ParentModeMotionHighlightProps & {
      mode: "parent";
      controlledItems: true;
      children: React.ReactNode;
    };

type ControlledChildrenModeMotionHighlightProps<T extends string> =
  BaseMotionHighlightProps<T> & {
    mode?: "children" | undefined;
    controlledItems: true;
    children: React.ReactNode;
  };

type UncontrolledParentModeMotionHighlightProps<T extends string> =
  BaseMotionHighlightProps<T> &
    ParentModeMotionHighlightProps & {
      mode: "parent";
      controlledItems?: false;
      itemsClassName?: string;
      children: React.ReactElement | React.ReactElement[];
    };

type UncontrolledChildrenModeMotionHighlightProps<T extends string> =
  BaseMotionHighlightProps<T> & {
    mode?: "children";
    controlledItems?: false;
    itemsClassName?: string;
    children: React.ReactElement | React.ReactElement[];
  };

type MotionHighlightProps<T extends string> = React.ComponentProps<"div"> &
  (
    | ControlledParentModeMotionHighlightProps<T>
    | ControlledChildrenModeMotionHighlightProps<T>
    | UncontrolledParentModeMotionHighlightProps<T>
    | UncontrolledChildrenModeMotionHighlightProps<T>
  );

function MotionHighlight<T extends string>({
  ref,
  ...props
}: MotionHighlightProps<T>) {
  const {
    children,
    value,
    defaultValue,
    onValueChange,
    className,
    transition = { type: "spring", stiffness: 350, damping: 35 },
    hover = false,
    enabled = true,
    disabled = false,
    exitDelay = 0.2,
    mode = "children",
  } = props;

  const localRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

  const [activeValue, setActiveValue] = React.useState<T | null>(
    value ?? defaultValue ?? null
  );
  const [boundsState, setBoundsState] = React.useState<Bounds | null>(null);
  const [activeClassNameState, setActiveClassNameState] =
    React.useState<string>("");

  const safeSetActiveValue = React.useCallback(
    (id: T | null) => {
      setActiveValue((prev) => (prev === id ? prev : id));
      if (id !== activeValue) onValueChange?.(id as T);
    },
    [activeValue, onValueChange]
  );

  const safeSetBounds = React.useCallback(
    (bounds: DOMRect) => {
      if (!localRef.current) return;

      const boundsOffset = (props as ParentModeMotionHighlightProps)
        ?.boundsOffset ?? {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
      };

      const containerRect = localRef.current.getBoundingClientRect();
      const newBounds: Bounds = {
        top: bounds.top - containerRect.top + (boundsOffset.top ?? 0),
        left: bounds.left - containerRect.left + (boundsOffset.left ?? 0),
        width: bounds.width + (boundsOffset.width ?? 0),
        height: bounds.height + (boundsOffset.height ?? 0),
      };

      setBoundsState((prev) => {
        if (
          prev &&
          prev.top === newBounds.top &&
          prev.left === newBounds.left &&
          prev.width === newBounds.width &&
          prev.height === newBounds.height
        ) {
          return prev;
        }
        return newBounds;
      });
    },
    [props]
  );

  const clearBounds = React.useCallback(() => {
    setBoundsState((prev) => (prev === null ? prev : null));
  }, []);

  React.useEffect(() => {
    if (value !== undefined) setActiveValue(value);
    else if (defaultValue !== undefined) setActiveValue(defaultValue);
  }, [value, defaultValue]);

  const id = React.useId();

  React.useEffect(() => {
    if (mode !== "parent") return;
    const container = localRef.current;
    if (!container) return;

    const onScroll = () => {
      if (!activeValue) return;
      const activeEl = container.querySelector<HTMLElement>(
        `[data-value="${activeValue}"][data-highlight="true"]`
      );
      if (activeEl) safeSetBounds(activeEl.getBoundingClientRect());
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, [mode, activeValue, safeSetBounds]);

  const render = React.useCallback(
    (children: React.ReactNode) => {
      if (mode === "parent") {
        return (
          <div
            ref={localRef}
            data-slot="motion-highlight-container"
            className={cn(
              "relative",
              (props as ParentModeMotionHighlightProps)?.containerClassName
            )}
          >
            <AnimatePresence initial={false}>
              {boundsState && (
                <motion.div
                  data-slot="motion-highlight"
                  animate={{
                    top: boundsState.top,
                    left: boundsState.left,
                    width: boundsState.width,
                    height: boundsState.height,
                    opacity: 1,
                  }}
                  initial={{
                    top: boundsState.top,
                    left: boundsState.left,
                    width: boundsState.width,
                    height: boundsState.height,
                    opacity: 0,
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      ...transition,
                      delay: (transition?.delay ?? 0) + (exitDelay ?? 0),
                    },
                  }}
                  transition={transition}
                  className={cn(
                    "absolute bg-muted z-0",
                    className,
                    activeClassNameState
                  )}
                />
              )}
            </AnimatePresence>
            {children}
          </div>
        );
      }

      return (
        <div ref={localRef} data-slot="motion-highlight-container">
          {children}
        </div>
      );
    },
    [
      mode,
      boundsState,
      transition,
      exitDelay,
      className,
      activeClassNameState,
      props,
    ]
  );

  const value_ = React.useMemo(
    () => ({
      mode,
      activeValue,
      setActiveValue: safeSetActiveValue as (value: string | null) => void,
      setBounds: safeSetBounds,
      clearBounds,
      id,
      hover,
      className,
      activeClassName: activeClassNameState,
      setActiveClassName: setActiveClassNameState,
      transition,
      disabled,
      enabled,
      exitDelay,
      forceUpdateBounds: (props as ParentModeMotionHighlightProps)
        ?.forceUpdateBounds,
    }),
    [
      mode,
      activeValue,
      safeSetActiveValue,
      safeSetBounds,
      clearBounds,
      id,
      hover,
      className,
      activeClassNameState,
      transition,
      disabled,
      enabled,
      exitDelay,
      props,
    ]
  );

  return (
    <MotionHighlightContext.Provider value={value_}>
      {render(children)}
    </MotionHighlightContext.Provider>
  );
}

type MotionHighlightItemProps = React.ComponentProps<"div"> & {
  children: React.ReactElement;
  id?: string;
  value?: string;
  className?: string;
  disabled?: boolean;
  asChild?: boolean;
  forceUpdateBounds?: boolean;
};

function MotionHighlightItem({
  ref,
  children,
  id,
  value,
  className,
  disabled = false,
  asChild = false,
  forceUpdateBounds,
  ...props
}: MotionHighlightItemProps) {
  const localRef = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

  const {
    mode,
    activeValue,
    setActiveValue,
    setBounds,
    clearBounds,
    hover,
    enabled,
    disabled: contextDisabled,
  } = useMotionHighlight();

  const itemId = React.useId();
  const finalId = id ?? itemId;
  const itemValue = value ?? finalId;

  const isActive = activeValue === itemValue;
  const isDisabled = disabled || contextDisabled;

  const updateBounds = React.useCallback(() => {
    if (!localRef.current) return;
    setBounds(localRef.current.getBoundingClientRect());
  }, [setBounds]);

  React.useEffect(() => {
    if (!isActive || !enabled || mode !== "parent") return;
    updateBounds();
  }, [isActive, enabled, mode, updateBounds]);

  React.useEffect(() => {
    if (!forceUpdateBounds || !isActive || !enabled || mode !== "parent")
      return;
    const interval = setInterval(updateBounds, 100);
    return () => clearInterval(interval);
  }, [forceUpdateBounds, isActive, enabled, mode, updateBounds]);

  const handleMouseEnter = React.useCallback(() => {
    if (!hover || !enabled || isDisabled) return;
    setActiveValue(itemValue);
  }, [hover, enabled, isDisabled, setActiveValue, itemValue]);

  const handleMouseLeave = React.useCallback(() => {
    if (!hover || !enabled || isDisabled) return;
    clearBounds();
    setActiveValue(null);
  }, [hover, enabled, isDisabled, clearBounds, setActiveValue]);

  const child = React.Children.only(children) as React.ReactElement;

  const dataAttributes = {
    "data-active": isActive ? "" : undefined,
    "data-value": itemValue,
    "data-disabled": isDisabled || undefined,
    "data-highlight": true,
    "data-slot": "motion-highlight-item",
  };

  if (asChild) {
    return React.cloneElement(child, {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      className: cn(
        (child.props as { className?: string }).className,
        className
      ),
      ...dataAttributes,
      ...props,
    } as unknown as React.ReactElement);
  }

  return (
    <div
      ref={localRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...dataAttributes}
      {...props}
    >
      {children}
    </div>
  );
}

export { MotionHighlight, MotionHighlightItem, useMotionHighlight };
