import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://localhost:3102"

export const patchGoodsThunk = createAsyncThunk("liked/patchGoodsThunk", async () => {
    const res = await axios.patch(BASE_URL + '/liked')

    return res.data
})