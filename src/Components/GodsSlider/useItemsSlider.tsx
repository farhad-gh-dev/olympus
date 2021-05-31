import { useState, useEffect } from "react";
import type { SliderItem } from "./_ItemsSliderTypes";

const useItemsSlider = () => {
  const [sliderItems, setSliderItems] = useState<SliderItem[]>([]);
  const [targetSlideIndex, setTargetSlideIndex] = useState(0);

  const nextSlideHandler = () => {
    if (targetSlideIndex !== sliderItems.length - 1) {
      setTargetSlideIndex(targetSlideIndex + 1);
    }
  };

  const prevSlideHandler = () => {
    if (targetSlideIndex !== 0) {
      setTargetSlideIndex(targetSlideIndex - 1);
    }
  };

  useEffect(() => {
    const sliderData = [
      { title: "hermes", href: "/hermes" },
      { title: "athena", href: "/athena" },
      { title: "zeus", href: "/zeus" },
      { title: "ares", href: "/ares" },
      { title: "poseidon", href: "/poseidon" },
    ];

    setSliderItems(sliderData);
    setTargetSlideIndex(Math.round((sliderData.length - 1) / 2));
  }, []);

  return {
    sliderItems,
    targetSlideIndex,
    nextSlideHandler,
    prevSlideHandler,
  };
};

export default useItemsSlider;
