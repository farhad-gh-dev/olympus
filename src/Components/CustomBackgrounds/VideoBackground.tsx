import React, { useEffect } from "react";

interface Props {
  targetVideo: string;
  playVideo: boolean;
  delay?: number;
}

const VideoBackground: React.FC<Props> = ({
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
  }, [playVideo, delay]);

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

export default VideoBackground;
