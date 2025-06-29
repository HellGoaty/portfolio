import React, { useEffect, useRef } from "react";

type VideoComponentProps = {
  projectId: string;
};

const VideoComponent: React.FC<VideoComponentProps> = ({ projectId }) => {
  const videoUrl = `/projects/${projectId}/demo.mp4`;
  const videoRef = useRef<HTMLVideoElement | null>(null); // ✅ typage explicite

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.warn("Autoplay failed:", err);
      });
    }
  }, []);

  return (
    <div className="video-container flex justify-center">
      <video
        ref={videoRef}
        playsInline
        loop
        autoPlay
        muted
        className="rounded-xl shadow-md max-w-full max-h-[600px]"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
