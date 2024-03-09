import styled from 'styled-components'

export const HeaderImage1 = styled.img`
  width: 150px;
  height: 30px;
  margin-top: 10px;
`
export const HeaderContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 210px;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    width: 150px;
  }
`
export const HeaderButton = styled.button`
  background-color: transparent;
  border-color: #3b82f6;
  color: #3b82f6;
  font-family: 'roboto';
  border-radius: 3px;
  width: 100px;
  height: 30px;
`
export const HeaderButton2 = styled.button`
  background-color: transparent;
  border-width: 0px;
  margin-top: -10px;
  margin-left: -10px;
`
export const HeaderButton1 = styled.button`
  background-color: ${props => (props.value ? 'transparent' : ' #3b82f6')};
  border-color: ${props => props.value && '#616e7c'};
  border-width: ${props => (props.value ? '1' : '0')}px;
  color: ${props => (props.value ? '#616e7c' : ' #ffffff')};
  font-family: 'roboto';
  border-radius: 3px;
  width: 70px;
  height: 30px;
`
export const HeaderList = styled.li`
  display: flex;
  list-style-type: none;
  flex-direction: row;
`
export const SideP1 = styled.p`
  font-family: 'roboto';
  font-weight: 500;
  color: black;
  margin-top: 5px;
  margin-left: 30px;
  text-decoration: none;
`
export const HeaderContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 20px;
`
export const HeaderMoon = styled.button`
  background-color: transparent;
  border-width: 0px;
  margin-top: -12px;
  @media screen and (max-width: 768px) {
    width: 30px;
  }
`
export const User = styled.img`
  width: 32px;
  height: 32px;
`
export const HeaderContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10vh;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 5px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const HeaderContainer1 = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10vh;
  padding-right: 50px;
  padding-left: 50px;
  padding-top: 5px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
