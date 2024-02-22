import React, { useRef, useEffect, FC, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { motion } from "framer-motion";
import { BWrapper, Button, Placeholder, Wrapper } from "./styles";
import { Pause, Play } from "./components/icons";

export const AudioWaveform: FC<{ audioUrl: string; sender: string }> = ({
  audioUrl,
  sender,
}) => {
  const waveSurferRef = useRef<HTMLDivElement>(null); // Use HTMLDivElement type for ref
  const [waveSurferInstance, setWaveSurferInstance] =
    useState<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  useEffect(() => {
    waveSurferInstance?.on("ready", () => {
      if (sender === "isabella") {
        waveSurferInstance.play();
      }
    });
  }, [waveSurferInstance]);
  useEffect(() => {
    if (!audioUrl) return; // Do nothing if audioUrl is not available

    // Initialize WaveSurfer
    const wavesurfer = WaveSurfer.create({
      container: waveSurferRef.current!,
      waveColor:
        sender === "isabella"
          ? "#394245"
          : ["#6164e3", "#00a4f0", "#00e89a", "#00e89a", "#6164e3", "#00a4f0"],
      barWidth: 3.5,
      progressColor: "#e1e9ec",
      url: audioUrl,
      width: 290,
      height: 68,
      cursorColor: "transparent",
      dragToSeek: true,
    });

    // Load audio file
    wavesurfer.load(audioUrl);

    // Set the WaveSurfer instance
    setWaveSurferInstance(wavesurfer);

    // Event listener for WaveSurfer play event
    wavesurfer.on("play", () => {
      setIsPlaying(true);
    });

    // Event listener for WaveSurfer pause event
    wavesurfer.on("pause", () => {
      setIsPlaying(false);
    });

    return () => {
      // Clean up
      wavesurfer.destroy();
    };
  }, [audioUrl, sender]);

  const handleTogglePlay = () => {
    if (waveSurferInstance) {
      if (isPlaying) {
        waveSurferInstance.pause(); // Pause the audio if it's playing
      } else {
        waveSurferInstance.play(); // Play the audio if it's paused
      }
    }
  };

  return (
    <Wrapper sender={sender}>
      <Button onClick={handleTogglePlay}>
        {isPlaying ? (
          <motion.div
            key="pause"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <Pause />
          </motion.div>
        ) : (
          <motion.div
            key="play"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <Play />
          </motion.div>
        )}
      </Button>
      <Placeholder />
      <BWrapper style={{ zIndex: 0 }} sender={sender}>
        <div style={{ zIndex: -1 }} ref={waveSurferRef} />
      </BWrapper>
    </Wrapper>
  );
};
