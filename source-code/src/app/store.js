import { configureStore } from '@reduxjs/toolkit'

import { playersApi } from '../services/playerApi'
import { srAPI } from '../services/sr.api'
import { nbaPIS } from '../services/nbaPIS'
import { data_nba } from '../services/data.nba'
export default configureStore({
    reducer: {
        [playersApi.reducerPath]: playersApi.reducer, 
        [srAPI.reducerPath]: srAPI.reducer,
        [nbaPIS.reducerPath]: nbaPIS.reducer,
        [data_nba.reducerPath]:data_nba.reducer, 
    },
})