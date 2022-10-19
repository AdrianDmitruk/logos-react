import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Food, SearchFoodParams } from './types'

export const fetchFood = createAsyncThunk<Food[], SearchFoodParams>(
    'food/fetchFoodStatus',
    async (params) => {
        const { order, sortBy, category, search } = params
        const { data } = await axios.get<Food[]>(
            `https://6314cc32fa82b738f74e60f3.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`,
        )

        return data
    }
)