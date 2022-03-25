import { configureStore } from '@reduxjs/toolkit'
import { reducerForChoosenItems, reducerNameForChosenItem } from '../features/selected/choosenItems'
import { reducerForItems, reducerNameForItem } from '../features/selected/selectedItems'
import {reducer, reducerName} from '../features/selected/selectedReducer'

export default configureStore({
  reducer: {
    [reducerName]: reducer,
    [reducerNameForItem]: reducerForItems,
    [reducerNameForChosenItem]: reducerForChoosenItems
  }
})