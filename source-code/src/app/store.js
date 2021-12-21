import { configureStore } from '@reduxjs/toolkit'

import { data_nba } from '../services/data.nba'
import { proxyAPI } from '../services/proxyAPI'

export default configureStore({
    reducer: {
        [data_nba.reducerPath]:data_nba.reducer, 
        [proxyAPI.reducerPath]:proxyAPI.reducer,
    }
})

// , middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(data_nba.middleware)