import styled from '@emotion/styled';
import {MAIN_GREEN} from '../../constants/styles';

import usersImg from '../../assets/images/users.png';

export const HomeBox = styled.div`
  display: flex;
  flex-flow: wrap;
`

export const SectionItemWrapper = styled.div`
  &:hover {
    opacity: .7;
    transition: 0.15s;
  }
`

export const Title = styled.h3`
  color: ${MAIN_GREEN};
  text-align: center;
  margin-top: 10px;
`

export const SectionItemBorder = styled.div`
  padding: 10px;
  border: 2px solid ${MAIN_GREEN};
  border-radius: 10px;
`

export const SectionItem = styled.div`
  width: 120px;
  height: 120px;
  background-image: url(${usersImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`