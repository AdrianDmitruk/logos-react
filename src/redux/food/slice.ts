
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchFood } from './asyncActions'
import { Food, FoodSliceState, Status } from './types'
// import { CartItem } from './cartSlice'


const initialState: FoodSliceState = {
    items: [],
    status: Status.LOADING,
}

export const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Food[]>) {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFood.pending, (state) => {
            state.status = Status.LOADING
            state.items = []
        }) 
        builder.addCase(fetchFood.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = Status.SECCESS
        }) 
        builder.addCase(fetchFood.rejected, (state) => {
            state.status = Status.ERROR
            state.items = []
        }) 
    }

})


export const { setItems } = foodSlice.actions

export default foodSlice.reducer