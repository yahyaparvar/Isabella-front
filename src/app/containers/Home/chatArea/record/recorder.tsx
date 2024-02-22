import React, { useState } from "react";
import { ReactMediaRecorder } from "react-media-recorder";
import styled from "styled-components";
import { motion } from "framer-motion";
import { COLUMN_CENTER } from "styles/globalStyles";
import { Pause, RecordIcon } from "./Icon";
import { useDispatch, useSelector } from "react-redux";
import { homeActions } from "../../slice";
import { homeSelectors } from "../../selectors";

// Styled button component
const RecordButton = styled.button`
  background: linear-gradient(to right, #6366f1, #0ea5e9, #10b981);
  width: 80px;
  padding: 1rem;

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
  position: fixed;
  right: 85px;
  bottom: 85px;
`;

type Props = {};

const RecordMessage: React.FC<Props> = () => {
  const micStatus = useSelector(homeSelectors.selectStatus);
  const dispatch = useDispatch();

  const handleToggleRecording = ({
    startRecording,
    stopRecording,
  }: {
    startRecording: () => void;
    stopRecording: () => void;
  }): void => {
    if (micStatus === "recording") {
      dispatch(homeActions.setStatus("stopped"));
      stopRecording();
    } else {
      dispatch(homeActions.setStatus("recording"));
      startRecording();
    }
  };
  const handleStop = (blobUrl: string) => {
    dispatch(homeActions.sendAudio({ blobUrl }));
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
            {micStatus === "recording" ? (
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
                key="record"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
              >
                <RecordIcon classText={"stopped"} />
              </motion.div>
            )}
          </RecordButton>
          
        </Wrapper>
      )}
    />
  );
};

export default RecordMessage;
