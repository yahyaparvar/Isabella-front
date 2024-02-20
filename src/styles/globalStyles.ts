import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  --bg-color:#25292F;
}
.darkTheme {

}

body,
html {
  margin: 0;
  width: 100vw;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  background-color: var(--bg-color);
}
*{
  font-family:"Inter" !important;
  box-sizing:border-box;
}
`;

//COLUMN

export const ROW = css`
  display: flex;
  flex-direction: row;
`;
export const COLUMN = css`
  display: flex;
  flex-direction: column;
`;
const CENTER = css`
  align-items: center;
  justify-content: center;
`;
export const COLUMN_CENTER = css`
  ${CENTER}
  ${COLUMN}
`;
export const ROW_CENTER = css`
  ${CENTER}
  ${ROW}
`;
export const COLUMN_JUSTIFY_END__ALIGN_CENTER = css`
  ${COLUMN}
  justify-content: flex-end;
  align-items: center;
`;
export const COLUMN_JUSTIFY_START__ALIGN_CENTER = css`
  ${COLUMN}
  justify-content: flex-start;
  align-items: center;
`;
export const COLUMN_ALIGN_END__JUSTIFY_CENTER = css`
  ${COLUMN}
  justify-content: center;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_START__JUSTIFY_CENTER = css`
  ${COLUMN}
  justify-content: center;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_START__JUSTIFY_START = css`
  ${COLUMN}
  justify-content: flex-start;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_END__JUSTIFY_END = css`
  ${COLUMN}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_START__JUSTIFY_END = css`
  ${COLUMN}
  justify-content: flex-end;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_END__JUSTIFY_START = css`
  ${COLUMN}
  justify-content: flex-start;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_END__SPACE_B = css`
  ${COLUMN}
  justify-content:space-between;
  align-items: flex-end;
`;
export const COLUMN_ALIGN_START__SPACE_B = css`
  ${COLUMN}
  justify-content:space-between;
  align-items: flex-start;
`;
export const COLUMN_ALIGN_CENTER__SPACE_B = css`
  ${COLUMN}
  justify-content:space-between;
  align-items: center;
`;

// ROWS

export const ROW_JUSTIFY_END__ALIGN_CENTER = css`
  ${ROW}
  justify-content: flex-end;
  align-items: center;
`;
export const ROW_JUSTIFY_START__ALIGN_CENTER = css`
  ${ROW}
  justify-content: flex-start;
  align-items: center;
`;
export const ROW_ALIGN_END__JUSTIFY_CENTER = css`
  ${ROW}
  justify-content: center;
  align-items: flex-end;
`;
export const ROW_ALIGN_START__JUSTIFY_CENTER = css`
  ${ROW}
  justify-content: center;
  align-items: flex-start;
`;
export const ROW_ALIGN_START__JUSTIFY_START = css`
  ${ROW}
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ROW_ALIGN_END__JUSTIFY_END = css`
  ${ROW}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ROW_ALIGN_START__JUSTIFY_END = css`
  ${ROW}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ROW_ALIGN_END__JUSTIFY_START = css`
  ${ROW}
  justify-content: flex-end;
  align-items: flex-end;
`;
export const ROW_ALIGN_END__SPACE_B = css`
  ${ROW}
  justify-content:space-between;
  align-items: flex-end;
`;
export const ROW_ALIGN_START__SPACE_B = css`
  ${ROW}
  justify-content:space-between;
  align-items: flex-start;
`;
export const ROW_ALIGN_CENTER__SPACE_B = css`
  ${ROW}
  justify-content:space-between;
  align-items: center;
`;
export const FULL_WIDTH = css`
  width: 100%;
`;
export const FULL_HEIGHT = css`
  height: 100%;
`;
export const UNSELECTABLE = css`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const BUTTON = css`
  ${UNSELECTABLE}
  border: none;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 14px;
  margin: 4px 2px;
  cursor: pointer;
`;

export default GlobalStyle;
