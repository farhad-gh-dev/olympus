import React from "react";
import "./custom-backgrounds.scss";

interface Props {
  targetVideo: string;
  delay?: number;
  onVideoLoadHandler?: () => void;
}

const VideoBackground: React.FC<Props> = ({
  targetVideo = "sample",
  delay = 0,
  onVideoLoadHandler = () => {},
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const videoPlayHandler = () => {
    onVideoLoadHandler();
    setTimeout(() => {
      videoRef.current?.play();
    }, delay);
  };

  const videoSrcHandler = (): string => {
    try {
      return require(`../../assets/gods/${targetVideo}.mp4`).default;
    } catch {
      return require(`../../assets/gods/athena.mp4`).default;
    }
  };

  return (
    <div className="custom-backgrounds">
      <video
        ref={videoRef}
        src={videoSrcHandler()}
        className="front-video"
        onCanPlayThrough={() => videoPlayHandler()}
      />
    </div>
  );
};

export default VideoBackground;
