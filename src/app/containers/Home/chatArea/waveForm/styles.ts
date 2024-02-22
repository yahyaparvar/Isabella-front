// AudioWaveform.styles.ts
import styled from "styled-components";

export const Wrapper = styled.div<{ sender: string }>`
  background: ${(props) =>
    props.sender === "isabella"
      ? "linear-gradient(to right,#6366f1,#0ea5e9,#10b981)"
      : "#394245"};
  display: flex;
  flex-direction: row;
  padding: 0px 10px;
  border-radius: 16px;
  height: 68px;
`;
export const BWrapper = styled.div<{ sender: string }>``;
export const Placeholder = styled.div`
  width: 10px;
`;
export const Button = styled.div`
  /* Your button styles here */
  display: inline-block;
  width: 32px;
  margin-top: 18px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  text-align: center;
`;
