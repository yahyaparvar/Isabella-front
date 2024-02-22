import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/types";
import { initialState } from "./slice";

const homeDomains = {
  selectDomain: (state: RootState) => state.home || initialState,
  selectMessages: (state: RootState) =>
    state.home?.messages || initialState.messages,
  selectStatus: (state: RootState) =>
    state.home?.status || initialState.status,
  selectMessageLoading: (state: RootState) =>
    state.home?.messageLoading || initialState.messageLoading,
};

export const homeSelectors = {
  selectHome: createSelector(
    [homeDomains.selectDomain],
    (homeState) => homeState
  ),
  selectMessages: createSelector(
    [homeDomains.selectMessages],
    (messages) => messages
  ),
  selectStatus: createSelector(
    [homeDomains.selectStatus],
    (status) => status
  ),
  selectMessageLoading: createSelector(
    [homeDomains.selectMessageLoading],
    (messageLoading) => messageLoading
  ),
};
