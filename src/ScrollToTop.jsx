import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const pathName = useLocation();

  useEffect(() => {
    if (pathName.hash !== "#contact") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathName]);

  return null;
}
