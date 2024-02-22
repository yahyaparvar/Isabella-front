/* eslint-disable react-hooks/rules-of-hooks */
import { PayloadAction } from "@reduxjs/toolkit";
import {
  ContainerState,
  Message,
  MessageStatus,
  SendAudioProps,
} from "./types";
import { createSlice } from "store/toolkit";
import { useInjectReducer, useInjectSaga } from "store/redux-injectors";

import { homeSaga } from "./saga";

// The initial state of the Home container
export const initialState: ContainerState = {
  messages: [],
  status: "idle",
  messageLoading: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    sendAudio(state, action: PayloadAction<SendAudioProps>) {},
    addMessages(state, action: PayloadAction<Message | Message[]>) {
      // Handle both single message and array of messages
      const newMessages = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];
      state.messages = [...state.messages, ...newMessages];
    },
    setStatus(state, action: PayloadAction<MessageStatus>) {
      state.status = action.payload;
    },
    setMessageLoading(state, action: PayloadAction<boolean>) {
      state.messageLoading = action.payload;
    },
  },
});

export const {
  actions: homeActions,
  reducer: homeReducer,
  name: sliceKey,
} = homeSlice;

export const usehomeSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: homeReducer });
  useInjectSaga({ key: sliceKey, saga: homeSaga });
  return { homeActions };
};
