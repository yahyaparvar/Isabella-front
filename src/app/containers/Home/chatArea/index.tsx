import React from "react";
import { Wrapper } from "./styles";
import RecordMessage from "./record/recorder";

const ChatArea = () => {
  return (
    <Wrapper>
      <RecordMessage
        handleStop={() => {
          console.log("stopped");
        }}
      ></RecordMessage>
    </Wrapper>
  );
};

export default ChatArea;
