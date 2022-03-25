import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SelectedSections {
  [key: string]: boolean;
}

export const reducerNameForItem = 'selectedItem'

const initialState = {} as SelectedSections;

export const selectedItemReducer = createSlice({
  name: reducerNameForItem,
  initialState,
  reducers: {
    selectItem(state, action: PayloadAction<string>) {
      state[action.payload] = true
    },
    deselectItem(state, action: PayloadAction<string>) {
      state[action.payload] = false
    }
  }
})

export const { selectItem, deselectItem } = selectedItemReducer.actions

export const reducerForItems = selectedItemReducer.reducer

export const selectedItem = (state: {[reducerNameForItem]: SelectedSections} ) => {
  return state[reducerNameForItem]
};