import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ExpandedSections {
  [key: string]: boolean;
}

export const reducerName = 'selectedComponent'

const initialState = {} as ExpandedSections;

export const selectedReducer = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    expand(state, action: PayloadAction<string>) {
      state[action.payload] = true
    },
    collapse(state, action: PayloadAction<string>) {
      state[action.payload] = false
    }
  }
})

export const { collapse, expand } = selectedReducer.actions

export const reducer = selectedReducer.reducer

export const selectedComponent = (state: {[reducerName]: ExpandedSections} ) => {
  return state[reducerName]
};