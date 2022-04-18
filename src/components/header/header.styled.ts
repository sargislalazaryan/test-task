import styled from '@emotion/styled';

import {MAIN_GREEN} from '../../constants/styles';

import logoImg from '../../assets/images/logo.png';
import userImg from '../../assets/images/user.png';

export const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 40px;
  background: ${MAIN_GREEN};
  margin-bottom: 20px;
  position: sticky;
  top: 0;
`

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: wrap;
`

export const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

export const UserAuth = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${userImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`