import React from "react";

export type useRectFn = <T extends HTMLElement>(ref: React.RefObject<T>) => DOMRect | undefined;

export const useRect: useRectFn = (ref) => {
    const [rect, setRect] = React.useState<DOMRect | undefined>(undefined);

    const handleResize = React.useCallback(() => {
        if (!ref.current) {
            return;
        }

        // Update client rect
        setRect(ref.current.getBoundingClientRect());
    }, [ref]);

    React.useLayoutEffect(() => {
        const element: HTMLElement | null = ref.current;
        if (!element) {
            return;
        }

        if (typeof ResizeObserver === "function") {
            let resizeObserver = new ResizeObserver(() => handleResize());
            resizeObserver.observe(element);

            return () => {
                if (!resizeObserver) {
                    return;
                }

                resizeObserver.disconnect();
            };
        } else {
            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }
    }, [ref.current]);

    return rect;
};
