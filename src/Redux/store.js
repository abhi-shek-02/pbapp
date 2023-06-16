import { configureStore } from '@reduxjs/toolkit'
import apireducer from './slice/apidata'
export const store = configureStore({
    reducer:{
        Allapidata:apireducer,
    },
});
