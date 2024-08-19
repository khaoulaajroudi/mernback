import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getcontact=createAsyncThunk('/getcontact',async()=>{
    try {
        let resultat= await axios.get('http://localhost:5000/contact/all')
        return  resultat;
    } catch (error) {
        console.log(error)
    }
})
export const addcontact=createAsyncThunk('/addcontact',async(newcontact)=>{
    try{
        let resultat= await axios.post('http://localhost:5000/contact/add',newcontact)
        return  resultat;   

    }catch (error) {
        console.log(error)
    }
})
export const deletecontact=createAsyncThunk('/deletecontact',async(id)=>{
    try{
        let resultat= await axios.delete(`http://localhost:5000/contact/${id}`)
        return  resultat;   

    }catch (error) {
        console.log(error)
    }
})
export const updatecontact=createAsyncThunk('/updatecontact',async(id,upcontact)=>{
    try{
        let resultat= await axios.put(`http://localhost:5000/contact/${id}`,upcontact)
        return  resultat;   

    }catch (error) {
        console.log(error)
    }
})


const initialState = {
  contact:null,
  status:null
}
export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // get
      .addCase(getcontact.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getcontact.fulfilled, (state, action) => {
        state.status = "success";
        state.contact = action.payload?.data?.voicilist;
      })
      .addCase(getcontact.rejected, (state) => {
        state.status = "fail";
      })
    //   add
            .addCase(addcontact.pending, (state) => {
        state.status = "pending";
      })
      .addCase(addcontact.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(addcontact.rejected, (state) => {
        state.status = "fail";
      })
    //   delete
      .addCase(deletecontact.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deletecontact.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(deletecontact.rejected, (state) => {
        state.status = "fail";
      })
       //   update
       .addCase(updatecontact.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updatecontact.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(updatecontact.rejected, (state) => {
        state.status = "fail";
      })
}
})

// Action creators are generated for each case reducer function
export const {} = contactSlice.actions

export default contactSlice.reducer