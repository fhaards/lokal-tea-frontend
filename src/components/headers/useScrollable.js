import { useEffect, useState } from "react";

const useScrollable = () => {
  /** Scrolling Effects */
  const [offset, setOffset] = useState(0);
  const [isScroll, setIsScroll] = useState(true);
  const handleScroll = () => setOffset(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (offset > 500) {
      setIsScroll(false);
    } else {
      setIsScroll(true);
    }
  }, [offset]);
  return { isScroll };
};

export { useScrollable };
