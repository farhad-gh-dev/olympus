import React from "react";
import ArrowIcon from "../../assets/index-page/slider-select-mark.svg";
import useItemsSlider from "./useItemsSlider";
import useSliderOffset from "./useSliderOffset";

const GodsSlider: React.FC = () => {
  const { sliderItems, targetSlideIndex, nextSlideHandler, prevSlideHandler } =
    useItemsSlider();

  const { offset } = useSliderOffset(sliderItems, targetSlideIndex);

  return (
    <div className="items-slider _d-flex _align-items-center _justify-space-between">
      <button
        className="slider-control-button prev-button _custom-button"
        onClick={prevSlideHandler}
      >
        {"<"}
      </button>
      <div id="slider-container" className="slider-container">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(${
              targetSlideIndex > 0 ? "-" : ""
            }${offset}px)`,
          }}
        >
          {sliderItems.length !== 0
            ? sliderItems.map((item) => {
                return (
                  <div
                    key={item.title}
                    id={item.title}
                    className={`slider-item${
                      //for active middle item
                      item.title === sliderItems[targetSlideIndex].title
                        ? " active"
                        : ""
                    }${
                      //for left side item
                      sliderItems[targetSlideIndex - 1] !== undefined &&
                      item.title === sliderItems[targetSlideIndex - 1].title
                        ? " left-slide"
                        : ""
                    }${
                      //for right side item
                      sliderItems[targetSlideIndex + 1] !== undefined &&
                      item.title === sliderItems[targetSlideIndex + 1].title
                        ? " right-slide"
                        : ""
                    }`}
                  >
                    <div className="slider-select-mark">
                      <img src={ArrowIcon} alt="arrow" />
                    </div>
                    <a href="/">{item.title}</a>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <button
        className="slider-control-button next-button _custom-button"
        onClick={nextSlideHandler}
      >
        {">"}
      </button>
    </div>
  );
};

export default GodsSlider;
