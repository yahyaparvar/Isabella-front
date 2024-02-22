import React, { FC } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion"; // Import motion from Framer Motion

import { useInjectReducer, useInjectSaga } from "store/redux-injectors";
import { homeReducer, sliceKey } from "./slice";

import { homeSaga } from "./saga";
import { Logo, RecordAnimation, StaticDrop, Wrapper } from "./styles";
import dropSrc from "app/assets/svg/sa.png";
import logo from "app/assets/svg/logo.svg";
//@ts-ignore
import mov from "app/assets/svg/mov.mp4";
import ChatArea from "./chatArea";
import { homeSelectors } from "./selectors";

interface Props {}

export function Home(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: homeReducer });
  useInjectSaga({ key: sliceKey, saga: homeSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isRecording = useSelector(homeSelectors.selectStatus);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  return (
    <>
      <Helmet>
        <title>Isabella</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <Wrapper>
        <ChatArea />
        <RecordBackground isRecording={isRecording === "recording"} />
      </Wrapper>
    </>
  );
}

const RecordBackground: FC<{ isRecording: boolean }> = (props) => {
  return props.isRecording ? (
    <>
      <StaticDrop src={dropSrc}></StaticDrop>

      <RecordAnimation controls={false} autoPlay loop muted>
        <source src={mov} type="video/mp4" />
        Your browser does not support the video tag.
      </RecordAnimation>
    </>
  ) : (
    <>
      <StaticDrop src={dropSrc}></StaticDrop>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1, ease: "easeIn" }}
      >
        <Logo src={logo}></Logo>
      </motion.div>
    </>
  );
};
