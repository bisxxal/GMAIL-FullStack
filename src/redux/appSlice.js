 
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "appSlice",
    initialState: {
        open: false,
        emails:[],
        side:false,
        selectedMail:null,
        searchInput:'',
        user:null,
        uid:localStorage.getItem('uid') || null,
    },
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setSide: (state, action) => {
            state.side = action.payload;
        },
        setEmails: (state, action) => {
            state.emails = action.payload;
        },
        setSelectedEmails: (state, action) => {
            state.selectedMail = action.payload;
        },
        setSearchInput:(state ,action)=>{
            state.searchInput = action.payload
        },
        setUser:(state ,action)=>{
            state.user = action.payload
        },
        setUid :(state ,action)=>{
            state.uid = action.payload
            localStorage.setItem('uid', state.uid);
        }, 
         clearUid: (state) => {
            state.uid = null;
            localStorage.removeItem('uid'); 
        },
    }
});

export const { setOpen,setEmails,setSide ,setUser, setSelectedEmails,setUid ,setSearchInput, clearUid} = appSlice.actions;

export default appSlice.reducer;
