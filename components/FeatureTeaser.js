import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import ReactPlayer from "react-player";
import ReactVisibilitySensor from "react-visibility-sensor";

export default function FeatureTeaser({
  teaser,
  withShadow,
  onRepeat,
  hideReplayButton,
  aspectRatioClasses,
  onVideoEnd,
}) {
  const videoPlayer = useRef(null);
  const [showReplayButton, setShowReplayButton] = useState(false);
  const [playing, setPlaying] = useState(false);

  const handleVideoEnd = () => {
    setPlaying(false);
    setShowReplayButton(true);
    if (onVideoEnd) {
      onVideoEnd(true);
    }
  };

  const handleVideoPause = () => {
    // videoPlayer.current.seekTo(0, 'seconds')
  };

  const onPlayerVisibility = (isVisible) => {
    if (isVisible) {
      setTimeout(() => {
        setPlaying(true);
        setShowReplayButton(false);
        if (onVideoEnd) {
          onVideoEnd(false);
        }
      }, 300);
    } else {
      setPlaying(false);
    }
  };

  const handleReplay = () => {
    videoPlayer &&
      videoPlayer.current &&
      videoPlayer.current.seekTo(0, "seconds");
    setPlaying(true);
    setShowReplayButton(false);
    if (onVideoEnd) {
      onVideoEnd(false);
    }
  };

  return (
    <div className="relative rounded-lg">
      <AnimatePresence>
        {!isMobile && !hideReplayButton && showReplayButton && (
          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -bottom-8 left-[50%] transform translate-x-[-50%] transition duration-300 hover:bg-gray-100 px-3 py-0.5 rounded-full  z-10"
            onClick={() => handleReplay()}
          >
            <div className="cursor-pointer flex items-center justify-center text-black ">
              <div className="ml-1.5 text-sm">Replay</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <ReactVisibilitySensor
        onChange={(isVisible) => onPlayerVisibility(isVisible)}
      >
        <div
          className={`relative rounded-lg overflow-hidden ${
            withShadow ? "shadow-card" : ""
          } ${aspectRatioClasses && aspectRatioClasses}`}
        >
          <ReactPlayer
            width="100%"
            height="100%"
            className="react-player"
            controls={false}
            muted
            loop={isMobile || onRepeat}
            playsinline
            playing={isMobile ? true : playing}
            url={teaser}
            onEnded={!onRepeat && handleVideoEnd}
            onPause={handleVideoPause}
            ref={videoPlayer}
          />
        </div>
      </ReactVisibilitySensor>
    </div>
  );
}
