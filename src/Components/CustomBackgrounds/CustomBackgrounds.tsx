import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useSlideTimer from "../../Hooks/useSlideTimer";
import { RootState } from "../../Redux/Reducers/index";

export const IndexBackground: React.FC = () => {
  const backgroundImages = useSelector(
    (store: RootState) => store.ThemeReducer.indexPageBackgroundImages
  );

  const { activeTargetIndex: activeImageIndex } = useSlideTimer(
    backgroundImages.length,
    6000
  );

  return (
    <div className="custom-backgrounds index-background">
      {backgroundImages.map((bgImage, index) => {
        return (
          <img
            key={bgImage.alt}
            src={bgImage.src}
            alt={bgImage.alt}
            className={`front-image${
              index === activeImageIndex ? " active" : ""
            }`}
          />
        );
      })}
    </div>
  );
};

interface Props {
  targetVideo: string;
  playVideo: boolean;
  delay?: number;
}

export const GodTemplateBackground: React.FC<Props> = ({
  targetVideo = "sample",
  playVideo = false,
  delay = 0,
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (playVideo) {
      const timer = setTimeout(() => {
        videoRef.current?.play();
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [playVideo]);

  return (
    <div className="custom-backgrounds">
      <video
        ref={videoRef}
        src={require(`../../assets/gods/${targetVideo}.mp4`).default}
        className="front-video"
      />
    </div>
  );
};
