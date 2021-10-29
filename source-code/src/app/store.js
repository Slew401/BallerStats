import { configureStore } from '@reduxjs/toolkit'

import { playersApi } from '../services/playerApi'
import { srAPI } from '../services/sr.api'
import { nbaPIS } from '../services/nbaPIS'
export default configureStore({
    reducer: {
        [playersApi.reducerPath]: playersApi.reducer, 
        [srAPI.reducerPath]: srAPI.reducer,
        [nbaPIS.reducerPath]: nbaPIS.reducer, 
    },
})