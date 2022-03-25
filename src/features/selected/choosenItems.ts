import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ChoosenSections {
  [key: string]: boolean;
}

export const reducerNameForChosenItem = 'choosenItem'

const initialState = {} as ChoosenSections;

export const choosenItemReducer = createSlice({
  name: reducerNameForChosenItem,
  initialState,
  reducers: {
    chooseItem(state, action: PayloadAction<string>) {
      state[action.payload] = true
    },
    removeItemFromCart() {
      return { ...initialState }
    }
  }
})

export const { chooseItem, removeItemFromCart } = choosenItemReducer.actions

export const reducerForChoosenItems = choosenItemReducer.reducer

export const choosenItem = (state: {[reducerNameForChosenItem]: ChoosenSections} ) => {
  return state[reducerNameForChosenItem]
};