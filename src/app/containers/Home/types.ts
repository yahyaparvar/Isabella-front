/* --- STATE --- */
export interface HomeState {
  messages: Message[];
  status: MessageStatus;
  messageLoading: boolean;
}
export type MessageStatus = "idle" | "recording" | "stopped";
export interface Message {
  sender: string;
  blobUrl: string;
}
export interface SendAudioProps {
  blobUrl: string;
}
export type ContainerState = HomeState;
