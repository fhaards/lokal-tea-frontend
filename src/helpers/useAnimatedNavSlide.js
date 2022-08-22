import { useState } from "react";
import { useAnimation, useCycle } from "framer-motion";

//Below logic is for toggling the navbar when toggleNavbar is called. It is used on mobile toggling of navbar.
export default function useAnimatedNavSlide() {
  const [showNav, setShowNav] = useState(false);
  const [x, cycleX] = useCycle("0%", "150%");
  const animation = useAnimation();

  const toggleNav = () => {
    setShowNav(!showNav);
    animation.start({ x: x, display: "block" });
    cycleX();
  };

  return { showNav, animation, toggleNav };
}
