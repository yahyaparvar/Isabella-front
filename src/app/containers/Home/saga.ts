import { take, call, put, select, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { homeActions } from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { ContainerState, Message, SendAudioProps } from "./types";
import { homeSelectors } from "./selectors";

function createBlobURL(data: any): string {
  const blob = new Blob([data], { type: "audio/mpeg" });
  const url = window.URL.createObjectURL(blob);
  return url;
}

export function* sendAudio(action: PayloadAction<SendAudioProps>) {
  const blobUrl = action.payload.blobUrl;
  const homeState: ContainerState = yield select(homeSelectors.selectHome);
  try {
    yield put(homeActions.addMessages({ blobUrl, sender: "You" }));
    yield put(homeActions.setMessageLoading(true));
    
    // Fetch the blob data
    const blobData: Blob = yield call(fetchBlobData, blobUrl);
    const formData = new FormData();
    formData.append("file", blobData, "myFile.wav");
    
    // Post the audio data
    const response: ArrayBuffer = yield call(postAudioData, formData);
    const audioUrl = createBlobURL(response);

    // Create and dispatch the message
    const isabellaMessage: Message = {
      sender: "isabella",
      blobUrl: audioUrl,
    };
    yield put(homeActions.addMessages(isabellaMessage));
    
    console.log("SUCCESS");
  } catch (error) {
    console.error(error);
  } finally {
    yield put(homeActions.setMessageLoading(false)); // Change to false
  }
}

// Function to fetch blob data
function fetchBlobData(blobUrl: string): Promise<Blob> {
  return fetch(blobUrl).then(res => res.blob());
}

// Function to post audio data
function postAudioData(formData: FormData): Promise<ArrayBuffer> {
  return axios.post("https://isabella-ai-back.vercel.app/post-audio", formData, {
    headers: {
      "Content-Type": "audio/mpeg",
    },
    responseType: "arraybuffer",
  }).then(res => res.data);
}

export function* homeSaga() {
  yield takeLatest(homeActions.sendAudio.type, sendAudio);
}
