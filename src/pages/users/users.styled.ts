import styled from '@emotion/styled';
import {MAIN_BG, MAIN_WHITE, ScreenSizes} from '../../constants/styles';

export const UsersBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${ScreenSizes.xs+'px'}) {
    flex-direction: column;
  }
`;

export const InReviewListBox = styled.div`
  width: 40%;
  background-color: ${MAIN_BG};
  padding: 20px;

  @media (max-width: ${ScreenSizes.xs+'px'}) {
    width: 100%;
    margin-bottom: 30px;
  }
`

export const ReviewedListBox = styled.div`
  width: 58%;
  background-color: ${MAIN_BG};
  padding: 20px;

  @media (max-width: ${ScreenSizes.xs+'px'}) {
    width: 100%;
  }
`

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`

export const UserCardBox = styled.div`
  width: 100%;
  min-height: 100px;
  background-color: ${MAIN_WHITE};
  margin: 10px 0;
  padding: 10px;
`

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Info = styled.div`
  p {
    margin-top: 12px;
  }
`
export const Image = styled.div(({imgSrc}: { [key: string]: string }) => {
    return ({
        width: '60px',
        height: '60px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: `url(${imgSrc})`,
        backgroundColor: MAIN_BG,
    });
})

export const ControllersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const UsersListBox = styled.div`
  max-height: 600px;
  overflow: auto;
  margin: 20px 0;
`

export const ReviewedUsersListBox = styled(UsersListBox)`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const UserColumnsTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  h4 {
    width: 48%;
    text-align: center;
  }
`

export const UsersColumn = styled.div`
  width: 48%;
`