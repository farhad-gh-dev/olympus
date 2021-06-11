import React from "react";

interface Props {
  targetVideo: string;
  delay?: number;
  videoLoadHandler: () => void;
}

const VideoBackground: React.FC<Props> = ({
  targetVideo = "sample",
  delay = 0,
  videoLoadHandler = () => {},
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const videoPlayHandler = () => {
    videoLoadHandler();
    setTimeout(() => {
      videoRef.current?.play();
    }, delay);
  };

  return (
    <div className="custom-backgrounds">
      <video
        ref={videoRef}
        src={require(`../../assets/gods/${targetVideo}.mp4`).default}
        className="front-video"
        onCanPlayThrough={() => videoPlayHandler()}
      />
    </div>
  );
};

export default VideoBackground;
