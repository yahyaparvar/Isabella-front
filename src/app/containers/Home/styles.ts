import styled from "styled-components";
import assetUrl from "app/assets/svg/bg.svg";
import { ROW_ALIGN_CENTER__SPACE_B, UNSELECTABLE } from "styles/globalStyles";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  ${ROW_ALIGN_CENTER__SPACE_B}
`;

export const StaticDrop = styled.img`
  position: fixed;
  top: -210px;
  left: -320px;
  width: 1200px;
  ${UNSELECTABLE}
  height: 1200px;
`;
export const Logo = styled.img`
  ${UNSELECTABLE}
  z-index: 2;
  position: fixed;
  top: 285px;
  left: 260px;
  height: 230px;
`;
export const RecordAnimation = styled.video`
  ${UNSELECTABLE}
  position: fixed;
  top: -467px;
  left: -607px;
  height: 1730px;
  width: 1730px;
`;
