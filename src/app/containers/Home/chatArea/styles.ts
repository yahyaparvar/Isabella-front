import styled from "styled-components";
import { COLUMN, COLUMN_CENTER } from "styles/globalStyles";

export const Wrapper = styled.div`
  width: 36%;
  position: absolute;
  right: 0;

  top: 0;
  min-height: 100%;
  z-index: 3;
  ${COLUMN_CENTER}
`;
