import { useState, useEffect } from "react";
import type { SliderItem } from "./_ItemsSliderTypes";

const useItemsSlider = (sliderData: SliderItem[]) => {
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
    setSliderItems(sliderData);
    setTargetSlideIndex(Math.round((sliderData.length - 1) / 2));
  }, [sliderData]);

  return {
    sliderItems,
    targetSlideIndex,
    nextSlideHandler,
    prevSlideHandler,
  };
};

export default useItemsSlider;
