import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterSliceState, Sort, SortPropertyEnum } from './types'

const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    sort: {
        name: 'Популярности',
        sortProperty: SortPropertyEnum.RATING_DESC
    }
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoyId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload
        },
        setSort(state, action: PayloadAction<Sort>) {
            state.sort = action.payload
        },
        setFilters(state, action: PayloadAction<FilterSliceState>) {
            state.sort = action.payload.sort
            state.categoryId = Number(action.payload.categoryId)
        },
    },
})





export const { setCategoyId, setSort, setFilters, setSearchValue } = filterSlice.actions

export default filterSlice.reducer