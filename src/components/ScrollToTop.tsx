import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  useEffect(()=>{
    scrollToTop();
  },[location.pathname])

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="hover:shadow-signUp flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
          <span className="sr-only">scroll to top</span>
        </div>
      )}
    </div>
  );
}
