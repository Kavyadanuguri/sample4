import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {FaMoon, FaRegLightbulb} from 'react-icons/fa'
import {IoMdMenu} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {IoExitOutline} from 'react-icons/io5'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'

import {BiListPlus} from 'react-icons/bi'
import CartContext from '../../context/CartContext'

import {
  HeaderContainer,
  HeaderContainer1,
  HeaderImage1,
  HeaderContainer2,
  HeaderButton,
  HeaderContainer3,
  HeaderButton1,
  HeaderButton2,
  HeaderMoon,
  HeaderList,
  SideP1,
  User,
} from './styledComponents'
import './index.css'

const Header = props => (
  <CartContext.Consumer>
    {value => {
      const {onThemeValue, isLightTheme} = value

      const onLoginPage = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const modeChange = () => {
        onThemeValue()
      }
      const HeaderLogo = isLightTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

      const themeImg = isLightTheme ? (
        <FaMoon size={30} />
      ) : (
        <FaRegLightbulb size={30} color="#ffffff" />
      )

      const back = isLightTheme ? '#ffffff' : '#231f20'
      const HeaderProfile = isLightTheme ? '#64748b' : '#ffffff'
      const HeaderProfile1 = isLightTheme ? 'black' : '#ffffff'
      const buttonBorder = !isLightTheme && '#ffffff'
      const SideColor = !isLightTheme && '#ffffff'
      const text = !isLightTheme && '#ffffff'
      return (
        <>
          <HeaderContainer1 style={{background: back}}>
            <Link to="/">
              <HeaderImage1 alt="website logo" src={HeaderLogo} />
            </Link>
            <HeaderContainer2>
              <HeaderMoon
                data-testid="theme"
                onClick={modeChange}
                type="button"
              >
                {themeImg}
              </HeaderMoon>
              <User
                alt="profile"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                style={{color: HeaderProfile}}
              />
              <Popup
                style={{background: back}}
                modal
                trigger={
                  <HeaderButton
                    style={{borderColor: buttonBorder, color: buttonBorder}}
                    type="button"
                  >
                    Logout
                  </HeaderButton>
                }
              >
                {close => (
                  <HeaderContainer3 style={{background: back}}>
                    <p style={{color: text}}>
                      Are you sure, you want to logout
                    </p>
                    <HeaderContainer2 value>
                      <HeaderButton1
                        style={{borderColor: buttonBorder}}
                        onClick={() => close()}
                        value
                        type="button"
                      >
                        Cancel
                      </HeaderButton1>
                      <HeaderButton1 onClick={onLoginPage} type="button">
                        Confirm
                      </HeaderButton1>
                    </HeaderContainer2>
                  </HeaderContainer3>
                )}
              </Popup>
            </HeaderContainer2>
          </HeaderContainer1>
          <HeaderContainer style={{background: back}}>
            <Link className="text" to="/">
              <HeaderImage1 value1 alt="website log" src={HeaderLogo} />
            </Link>
            <HeaderContainer2>
              <HeaderMoon onClick={modeChange} type="button">
                {themeImg}
              </HeaderMoon>
              <Popup
                style={{background: back}}
                trigger={
                  <HeaderButton2 type="button">
                    <IoMdMenu size={35} color={HeaderProfile1} />
                  </HeaderButton2>
                }
              >
                <HeaderContainer3 style={{background: back}}>
                  <ul>
                    <Link className="text" to="/">
                      <HeaderList key="home">
                        <AiFillHome color="#616e7c" size={25} />
                        <SideP1 style={{color: SideColor}}>Home</SideP1>
                      </HeaderList>
                    </Link>
                    <Link className="text" to="/trending">
                      <HeaderList key="trending">
                        <HiFire color="#616e7c" size={25} />
                        <SideP1 style={{color: SideColor}}>Trending</SideP1>
                      </HeaderList>
                    </Link>
                    <Link className="text" to="/gaming">
                      <HeaderList key="gaming">
                        <SiYoutubegaming color="#616e7c" size={25} />
                        <SideP1 style={{color: SideColor}}>Gaming</SideP1>
                      </HeaderList>
                    </Link>
                    <Link className="text" to="/saved-videos">
                      <HeaderList key="saved-videos">
                        <BiListPlus color="#616e7c" size={25} />
                        <SideP1 style={{color: SideColor}}>Saved Videos</SideP1>
                      </HeaderList>
                    </Link>
                  </ul>
                </HeaderContainer3>
              </Popup>

              <Popup
                style={{background: back}}
                modal
                trigger={
                  <HeaderButton2 type="button">
                    <IoExitOutline color={HeaderProfile1} size={40} />
                  </HeaderButton2>
                }
              >
                {close => (
                  <HeaderContainer3 style={{background: back}}>
                    <p style={{color: text}}>
                      Are you sure, you want to logout
                    </p>
                    <HeaderContainer2 value>
                      <HeaderButton1
                        style={{borderColor: buttonBorder}}
                        onClick={() => close()}
                        value
                        type="button"
                      >
                        Cancel
                      </HeaderButton1>
                      <HeaderButton1 onClick={onLoginPage} type="button">
                        Confirm
                      </HeaderButton1>
                    </HeaderContainer2>
                  </HeaderContainer3>
                )}
              </Popup>
            </HeaderContainer2>
          </HeaderContainer>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default withRouter(Header)
