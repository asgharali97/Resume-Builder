import {configureStore} from '@reduxjs/toolkit'
import UserSlice from './UserSlice';

const store = configureStore({
    reducer:UserSlice
})

export default store