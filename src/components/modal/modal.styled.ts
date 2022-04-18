import styled from '@emotion/styled';
import { MAIN_BG } from '../../constants/styles';

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: ${MAIN_BG};
  border: 2px solid #000;
  padding: 20px;
`;

export const ModalControls = styled.div`
  width: 140px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;