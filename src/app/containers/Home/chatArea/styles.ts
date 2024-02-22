import styled from "styled-components";
import {
  COLUMN,
  COLUMN_ALIGN_END__JUSTIFY_END,
  COLUMN_CENTER,
  COLUMN_JUSTIFY_START__ALIGN_CENTER,
} from "styles/globalStyles";

export const Wrapper = styled.div`
  width: 36%;
  position: absolute;
  right: 0;
  top: 0;
  min-height: 100%;
  z-index: 3;
  ${COLUMN_JUSTIFY_START__ALIGN_CENTER}
`;
export const PlaceHolder = styled.div`
  height: 250px;
`;
export const StyledController = styled.div`
  height: 100vh;
  overflow-y: hidden;
`;

export const ConversationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;

  width: 100%;
  height: calc(100% - 96px);
  overflow-y: scroll;
  padding-bottom: 96px;
`;

export const MessageContainer = styled.div`
  margin-top: 5px;
  position: relative;
  padding: 34px;
`;

export const SenderContainer = styled.div`
  margin-top: 4px;
`;

export const SenderName = styled.p<{ sender: string }>`
  font-style: italic;
  color: ${(props) => (props.sender === "isabella" ? "#10b981" : "#1ebfff")};
  align-self: ${(props) => (props.sender === "isabella" ? "right" : "left")};
  margin-right: ${(props) => (props.sender === "isabella" ? "2px" : "0")};
  margin-left: ${(props) => (props.sender === "isabella" ? "0" : "2px")};
`;

export const LoaderText = styled.div`
  text-align: center;
  font-style: italic;
  margin-top: 10px;
  color: white;
  &.animate-pulse {
    animation: pulse 1s infinite;
  }
  @keyframes pulse {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.4;
    }
  }
`;
export const SendHint = styled.div`
  position: fixed;
  bottom: 180px;
  color: white;
  right: 30px;
  &.animate-pulse {
    animation: pulse 1s infinite;
  }
  @keyframes pulse {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.4;
    }
  }
`;

export const RecorderWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 6px 0;
  border-top: 1px solid #000;
  text-align: center;
  background: #191a19;
`;
export const Message = styled.div<{ sender: string }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.sender === "isabella" ? "flex-end" : "flex-start"};
`;
export const LoadingWrapper = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  margin-top: 25px;
  align-items: flex-end;
`;
