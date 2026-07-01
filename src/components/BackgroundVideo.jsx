import { useEffect, useRef } from "react";
import Hls from "hls.js";

const VIDEO_URL =
  "https://stream.mux.com/kimF2ha9zLrX64H00UgLGPflCzNtl1T0215MlAmeOztv8.m3u8";

export function BackgroundVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return undefined;
    }

    let hls;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = VIDEO_URL;
    } else if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true });
      hls.loadSource(VIDEO_URL);
      hls.attachMedia(video);
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-cover opacity-100"
      />
      {/* Multi-layer overlay: top radial glow + full dark gradient for scroll sections */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.06),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.55)_50%,rgba(0,0,0,0.85)_100%)]" />
      <div className="absolute inset-0 bg-black/25 backdrop-blur-[1px]" />
    </div>
  );
}