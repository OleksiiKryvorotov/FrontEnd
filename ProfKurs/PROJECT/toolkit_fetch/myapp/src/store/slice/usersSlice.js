import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
}

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const resp = await fetch('https://dummyjson.com/users')
        const data = await resp.json()
        return data.users
 }   
)

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: (builder)=> {
        builder
          .addCase(fetchUsers.pending, () => {
            state.status = 'loading'
          })
          .addCase(fetchUsers.fulfilled, (state, action) =>{
            state.status = 'ready'
            state.list = action.payload
          })
          .addCase(fetchUsers.rejected, (state) => {
            state.status = 'error'
          })
    }
})

export default usersSlice.reducer