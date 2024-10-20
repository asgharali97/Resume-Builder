import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './UserSlice';

const store = configureStore({
    reducer:{
        resume:UserSlice
    }
})

export default store