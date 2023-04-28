import { createSlice } from "@reduxjs/toolkit"
import { getGoodsThunk } from "./getGoodsThunk"

const initialState = {
    data: [],
    filtered_data: []
}

export const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reduser: {
        getGoods: (state, action) => {
            state.data = state.data
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getGoodsThunk.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getGoodsThunk.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = 'succes'
            })
            .addCase(getGoodsThunk.rejected, (state) => {
                state.status = 'fail'
            })
    }

})


export default goodsSlice.reducer