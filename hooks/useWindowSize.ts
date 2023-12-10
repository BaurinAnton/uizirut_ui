import React, { useState, useEffect } from "react";

type TWindowSize = () => TStateWindowSize;

type TStateWindowSize = {
  width: number | null;
};

export const useWindowSize: TWindowSize = () => {
  const [windowSize, setWindowSize] = useState<TStateWindowSize>({
    width: null,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowSize = () =>
        setWindowSize({ width: window.innerWidth });
      window.addEventListener("resize", handleWindowSize);
      handleWindowSize();
      return () => window.removeEventListener("resize", handleWindowSize);
    }
  }, []);
  return windowSize;
};
