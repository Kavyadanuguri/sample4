import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import CartContext from './context/CartContext'
import Home from './components/Home'
import Login from './components/Login'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

class App extends Component {
  state = {
    cartItemsList: [],
    isLightTheme: true,
    saveColor: false,
  }

  onIncrementList = video => {
    const {cartItemsList} = this.state
    const filteredId = cartItemsList.find(each => each.id === video.id)
    if (filteredId === undefined) {
      this.setState(prevState => ({
        cartItemsList: [...prevState.cartItemsList, video],
      }))
    } else {
      const filteredList = cartItemsList.filter(each => each.id !== video.id)
      this.setState({cartItemsList: filteredList})
    }
  }

  onThemeValue = () => {
    this.setState(prevState => ({
      isLightTheme: !prevState.isLightTheme,
    }))
  }

  onSaveValue = value => {
    console.log(value)

    this.setState(prevState => ({saveColor: !prevState.saveColor}))
  }

  render() {
    const {cartItemsList, isLightTheme, saveColor} = this.state
    return (
      <CartContext.Provider
        value={{
          cartItemsList,
          isLightTheme,
          saveColor,

          onThemeValue: this.onThemeValue,
          onSaveValue: this.onSaveValue,
          onIncrementList: this.onIncrementList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
