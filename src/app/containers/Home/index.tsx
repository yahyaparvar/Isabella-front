import React, { FC, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion"; // Import motion from Framer Motion

import { useInjectReducer, useInjectSaga } from "store/redux-injectors";
import { homeReducer, sliceKey } from "./slice";
import { selectHome } from "./selectors";
import { homeSaga } from "./saga";
import { Logo, RecordAnimation, StaticDrop, Wrapper } from "./styles";
import dropSrc from "app/assets/svg/sa.png";
import logo from "app/assets/svg/logo.svg";
//@ts-ignore
import mov from "app/assets/svg/mov.mp4";

interface Props {}

export function Home(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: homeReducer });
  useInjectSaga({ key: sliceKey, saga: homeSaga });

  const [isVideoVisible, setIsVideoVisible] = useState(false); // State to track if video is visible

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const home = useSelector(selectHome);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  const toggleVideoVisibility = () => {
    setIsVideoVisible(!isVideoVisible); // Toggle the state
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      <Wrapper onClick={toggleVideoVisibility}>
        <RecordBackground isVideoVisible={isVideoVisible} />
      </Wrapper>
    </>
  );
}

const RecordBackground: FC<{ isVideoVisible: boolean }> = (props) => {
  return props.isVideoVisible ? (
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
