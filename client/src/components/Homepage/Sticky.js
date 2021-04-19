import React, { useRef, useMemo, useLayoutEffect } from "react";
import { compose } from "js-utl";
import { classNames } from "react-js-utl/utils";
import { useWindowRef } from "react-js-utl/hooks";
// import "./relative-sticky.css";

const getScrollY = (element) =>
  element === window ? element.scrollY : element.scrollTop;

const RelativeSticky = compose(React.memo)(function RelativeSticky({
  className = void 0,
  children,
  scrollElementRef = void 0,
  disable = false,
  topThresold = 0,
} = {}) {
  const windowRef = useWindowRef();
  scrollElementRef =
    useMemo(() => scrollElementRef, [scrollElementRef]) || windowRef;
  const ref = useRef(null);
  const holderRef = useRef(null);
  const topCallback = useMemo(
    () => () => {
      if (!ref.current || !scrollElementRef.current || !holderRef.current) {
        return;
      }
      const { y } = ref.current.getBoundingClientRect();
      const scrollTop = getScrollY(scrollElementRef.current);
      const absTop = scrollTop + y;
      const topThresholdOffset =
        typeof topThresold === "function" ? topThresold() : topThresold;
      const top = Math.max(0, scrollTop - absTop + topThresholdOffset);
      holderRef.current.style.transform = `translateY(${disable ? 0 : top}px)`;
    },
    [scrollElementRef, topThresold, disable]
  );
  useLayoutEffect(() => {
    const el = scrollElementRef.current;
    el && el.addEventListener("scroll", topCallback);
    topCallback();
    return () => {
      el.removeEventListener("scroll", topCallback);
    };
  }, [scrollElementRef, topCallback]);

  return (
    <div className={classNames("relative-sticky", className)} ref={ref}>
      <div className="relative-sticky-holder" ref={holderRef}>
        {children}
      </div>
    </div>
  );
});
RelativeSticky.displayName = "RelativeSticky";
export default RelativeSticky;
