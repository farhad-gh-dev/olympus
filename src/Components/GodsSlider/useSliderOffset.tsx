import { useState, useEffect } from "react";
import type { SliderItem } from "./_ItemsSliderTypes";

const useSliderOffset = (
  sliderItems: SliderItem[],
  targetSlideIndex: number
) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    //using timeout to prevent render issue (wrong calc for offset value)
    if (sliderItems.length !== 0) {
      let timeout = setTimeout(() => {
        let offsetSum = 0;
        let sideOffset = 0;

        //calc elements width before active item (no need for first item)
        if (targetSlideIndex !== 0) {
          sliderItems.forEach((item, index) => {
            const currentElement = document.getElementById(item.name);
            if (currentElement !== null && index < targetSlideIndex) {
              offsetSum += currentElement.clientWidth;
            }
          });
        }

        //get width of the active item in slider
        const targetElementWidth = document.getElementById(
          sliderItems[targetSlideIndex].name
        )?.clientWidth;

        const sliderWidth =
          document.getElementById("slider-container")?.clientWidth;

        //calc space for each side of the active item to set it in the middle of the slider
        if (sliderWidth !== undefined && targetElementWidth !== undefined) {
          sideOffset = (sliderWidth - targetElementWidth) / 2;
        }

        targetSlideIndex !== 0 //to prevent negative value
          ? setOffset(offsetSum - sideOffset)
          : setOffset(sideOffset);
      }, 0);

      return () => {
        clearTimeout(timeout);
      };
    }
  });

  return {
    offset,
  };
};

export default useSliderOffset;
