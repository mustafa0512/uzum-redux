import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:3102"

export const getGoodsThunk = createAsyncThunk("goods/getGoodsThunk", async () => {
    const res = await axios.get(BASE_URL + '/goods')

    return res.data
})