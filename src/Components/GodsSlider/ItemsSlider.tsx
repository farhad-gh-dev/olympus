import React from "react";
import { Link } from "react-router-dom";
import { SliderItem } from "./_ItemsSliderTypes";

import ArrowIcon from "../../assets/index-page/slider-select-mark.svg";
import useItemsSlider from "./useItemsSlider";
import useSliderOffset from "./useSliderOffset";

interface Props {
  sliderArr: SliderItem[];
}

const GodsSlider: React.FC<Props> = ({ sliderArr }) => {
  const { sliderItems, targetSlideIndex, nextSlideHandler, prevSlideHandler } =
    useItemsSlider(sliderArr);

  const { offset } = useSliderOffset(sliderItems, targetSlideIndex);

  return (
    <div className="items-slider _d-flex _align-items-center _justify-space-between">
      <button
        className="slider-control-button prev-button _custom-button"
        onClick={prevSlideHandler}
        data-testid="prev-button"
      >
        {"<"}
      </button>
      <div id="slider-container" className="slider-container">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {sliderItems.length !== 0
            ? sliderItems.map((item) => {
                return (
                  <div
                    key={item.name}
                    id={item.name}
                    className={`slider-item${
                      //for active middle item
                      item.name === sliderItems[targetSlideIndex].name
                        ? " active"
                        : ""
                    }${
                      //for left side item
                      sliderItems[targetSlideIndex - 1] !== undefined &&
                      item.name === sliderItems[targetSlideIndex - 1].name
                        ? " left-slide"
                        : ""
                    }${
                      //for right side item
                      sliderItems[targetSlideIndex + 1] !== undefined &&
                      item.name === sliderItems[targetSlideIndex + 1].name
                        ? " right-slide"
                        : ""
                    }`}
                  >
                    <div className="slider-select-mark">
                      <img src={ArrowIcon} alt="arrow" />
                    </div>
                    <Link
                      className="item-link"
                      to={`/${item.name}`}
                      tabIndex={
                        item.name === sliderItems[targetSlideIndex].name
                          ? 0
                          : -1
                      }
                    >
                      {item.name}
                    </Link>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <button
        className="slider-control-button next-button _custom-button"
        onClick={nextSlideHandler}
        data-testid="next-button"
      >
        {">"}
      </button>
    </div>
  );
};

export default GodsSlider;
