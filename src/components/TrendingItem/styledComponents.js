import styled from 'styled-components'

export const TrendingItemList = styled.li`
  list-style-type: none;
  padding-left: 50px;
  padding-right: 50px;
  display: flex;
  width: 100%;
  padding-top: 50px;
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    padding-left: 0px;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
  }
`

export const TrendingItemImage = styled.img`
  width: 500px;
  height: 230px;
  @media screen and (max-width: 768px) {
    width: 330px;
    height: 180px;
  }
`
export const TrendingItemHeading1 = styled.p`
  font-size: 22px;
  font-family: 'roboto';
  color: black;
  margin-bottom: 5px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-left: 0px;
  }
`
export const TrendingItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  width: 420px;
  @media screen and (max-width: 768px) {
    width: 320px;
    padding-left: 0px;
  }
`
export const TrendingItemP1 = styled.p`
  font-family: 'roboto';
  color: #616e7c;
  margin-top: 5px;
  margin-right: 5px;
`
export const Row = styled.div`
  display: flex;
`
