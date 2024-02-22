import React from "react";
import styled, { css } from "styled-components";

// Define styled SVG component
const StyledSVG = styled.svg<{ classText: string }>`
  fill: none;
  stroke-width: 1.5;
  stroke: white;
  background-color: transparent;
  height: 3rem; /* Adjust height as needed */

  ${({ classText }) =>
    classText === "recording"
      ? css`
          stroke: red;
          animation: pulse-animation 1s infinite; /* Example animation */
        `
      : ""}

  @keyframes pulse-animation {
    0% {
      filter: opacity(1);
    }
    50% {
      filter: opacity(0.4);
    }
    100% {
      filter: opacity(1);
    }
  }
`;

type Props = {
  classText: string; // Make classText optional
};

export const RecordIcon: React.FC<Props> = ({ classText }) => {
  return (
    <StyledSVG
      classText={classText}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
      />
    </StyledSVG>
  );
};

export const Pause = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white">
      <path
        fillRule="evenodd"
        d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
