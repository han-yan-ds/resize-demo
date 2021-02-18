import { useState, useEffect } from "react";

const useResize = (myRef) => {
  const [dimensions, setDimensions] = useState({
    offsetWidth: 0,
    offsetHeight: 0,
    clientWidth: 0,
    clientHeight: 0,
  });

  const handleResize = () => {
    if (myRef && myRef.current) {
      const {
        offsetWidth,
        offsetHeight,
        clientWidth,
        clientHeight,
      } = myRef.current;
      setDimensions({
        offsetWidth,
        offsetHeight,
        clientWidth,
        clientHeight,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);

  useEffect(handleResize, []);

  return dimensions;
};

export default useResize;
