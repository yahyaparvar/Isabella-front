import React, { useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import styled from "styled-components";
import { motion } from "framer-motion";
import { COLUMN_CENTER } from "styles/globalStyles";
import { Pause, RecordIcon } from "./Icon";

// Styled button component
const RecordButton = styled.button`
  background: linear-gradient(to right, #6366f1, #0ea5e9, #10b981);
  padding: 1rem;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  border: none;
  cursor: pointer;
  filter: brightness(1.1);

  &:hover {
  }
`;

const Message = styled.p`
  margin-top: 0.5rem;
  color: white;
  font-weight: lighter;
`;

const Wrapper = styled.div`
  ${COLUMN_CENTER}
`;

type Props = {
  handleStop: () => void; // Adjust the type for handleStop function
};

const RecordMessage: React.FC<Props> = ({ handleStop }) => {
  const [isRecording, setIsRecording] = useState<boolean>(false);

  const handleToggleRecording = ({
    startRecording,
    stopRecording,
  }: {
    startRecording: () => void;
    stopRecording: () => void;
  }): void => {
    window.location.replace("/#bottom");
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
    setIsRecording((prevState: boolean) => !prevState);
  };

  return (
    <ReactMediaRecorder
      audio
      onStop={handleStop}
      render={({ status, startRecording, stopRecording }) => (
        <Wrapper id="bottom">
          <RecordButton
            onClick={() =>
              handleToggleRecording({ startRecording, stopRecording })
            }
          >
            {status === "recording" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.08, ease: "easeInOut" }}
              >
                <Pause />
              </motion.div>
            ) : (
              <RecordIcon classText={"stopped"} />
            )}
          </RecordButton>
        </Wrapper>
      )}
    />
  );
};

export default RecordMessage;
