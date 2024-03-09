import React from 'react'

const CartContext = React.createContext({
  cartItemsList: [],
  isLightTheme: '',
  saveColor: '',
  onSaveValue: () => {},
  onThemeValue: () => {},
  onIncrementList: () => {},
})

export default CartContext
