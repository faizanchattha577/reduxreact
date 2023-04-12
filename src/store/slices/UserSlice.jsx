import {createSlice} from '@reduxjs/toolkit';
import { clearAllUser } from './Actions';

const UserSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        removeUser: (state, action) => {
            state.pop(action.payload);
        },
        // clearAllUser: (state, action) => {
          
        //     return []

        // },
    },

    extraReducers(builder) {
        builder.addCase(clearAllUser, () => {
            return [];  
        });


    },
});

console.log(UserSlice.actions);

export const {addUser, removeUser} = UserSlice.actions;

export {UserSlice};

