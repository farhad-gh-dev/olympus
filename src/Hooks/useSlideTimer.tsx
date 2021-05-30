import { useEffect, useState } from "react";

const useSlideTimer = (arrayLength: number, duration: number = 0) => {
  const [activeTargetIndex, setActiveTargetIndex] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (activeTargetIndex === arrayLength - 1) {
        setActiveTargetIndex(0);
        return;
      }

      setActiveTargetIndex(activeTargetIndex + 1);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [arrayLength, activeTargetIndex, duration]);

  return {
    activeTargetIndex,
  };
};

export default useSlideTimer;
