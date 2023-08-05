import styled from 'styled-components'

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 80%;
  border-style: solid;
  border-color: #ffffff;
  border-width: 2px;
  border-radius: 10px;
  background-color: transparent;
  margin-top: 2%;
`
export const ScoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ScoreName = styled.h1`
  color: white;
  font-size: 20px;
  font-family: 'Roboto';
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 12px;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const ScoreBoard = styled(ScoreNameContainer)`
  background-color: white;
  width: 18%;
  height: 90%;
  border-radius: 10px;
  margin-right: 12px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 576px) {
    width: 25%;
  }
`
export const ScoreHeading = styled.p`
  color: #223a5f;
  font-size: 22px;
  margin-bottom: 0px;
  font-family: 'Bree Serif';
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const ScoreResult = styled.p`
  color: #223a5f;
  font-size: 42px;
  margin-top: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  @media screen and (max-width: 576px) {
    font-size: 24px;
    margin-top: 10px;
  }
`