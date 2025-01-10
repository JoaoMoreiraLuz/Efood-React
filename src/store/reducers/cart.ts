import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: MenuItem[]
  isOpen: boolean
  isBuying: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isBuying: true
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<MenuItem>) => {
      const ItemMenu = state.items.find((Item) => Item.id === action.payload.id)

      if (!ItemMenu) {
        state.items.push(action.payload)
      } else {
        alert('Esse prato já está no carrinho!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
      state.isBuying = true
    },
    close: (state) => {
      state.isOpen = false
    },
    clear: (state) => {
      state.items = []
    },
    isBuyingFalse: (state) => {
      state.isBuying = false
    },
    isBuyingTrue: (state) => {
      state.isBuying = true
    }
  }
})

export const { add, close, open, remove, clear, isBuyingFalse, isBuyingTrue } =
  cartSlice.actions
export default cartSlice.reducer
