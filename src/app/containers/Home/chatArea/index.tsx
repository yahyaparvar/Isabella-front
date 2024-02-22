import React, { useEffect, useRef } from "react";
import {
  ConversationWrapper,
  LoaderText,
  LoadingWrapper,
  Message,
  MessageContainer,
  PlaceHolder,
  SendHint,
  SenderContainer,
  SenderName,
  Wrapper,
} from "./styles";
import { motion } from "framer-motion";
import RecordMessage from "./record/recorder";
import { useSelector } from "react-redux";
import { homeSelectors } from "../selectors";
import { AudioWaveform } from "./waveForm";
import { Loading } from "./waveForm/components/loading";

const ChatArea = () => {
  const messages = useSelector(homeSelectors.selectMessages);
  const status = useSelector(homeSelectors.selectStatus);
  const isLoading = useSelector(homeSelectors.selectMessageLoading);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };
  useEffect(() => {
    if (!isLoading) {
      scrollToBottom();
    }
  }, [isLoading]);
  return (
    <Wrapper>
      <ConversationWrapper>
        <MessageContainer>
          {messages.map((audio, index) => (
            <motion.div
              key="pause"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
            >
              <Message sender={audio.sender} key={index + audio.sender}>
                <SenderContainer>
                  <SenderName sender={audio.sender}>{audio.sender}</SenderName>
                </SenderContainer>
                <AudioWaveform audioUrl={audio.blobUrl} sender={audio.sender} />
              </Message>
            </motion.div>
          ))}
          {isLoading ? (
            <LoadingWrapper>
              <Loading />
            </LoadingWrapper>
          ) : (
            ""
          )}
        </MessageContainer>
        {messages.length === 0 && !isLoading && status !== "recording" && (
          <SendHint>Click here to start recording</SendHint>
        )}
        {isLoading && messages.length === 1 ? (
          <SendHint>Gimme a few seconds...</SendHint>
        ) : (
          ""
        )}
      </ConversationWrapper>
      <RecordMessage></RecordMessage>
      <PlaceHolder ref={scrollRef}></PlaceHolder>
    </Wrapper>
  );
};

export default ChatArea;
