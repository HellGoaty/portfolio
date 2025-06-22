import React, { useEffect, useRef } from "react";

const VideoComponent = ({ projectId }) => {
  const videoUrl = `/projects/${projectId}/demo.mp4`;
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="video-container flex justify-center">
      <video ref={videoRef} playsInline loop autoPlay muted>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
