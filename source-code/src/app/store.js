import { configureStore } from '@reduxjs/toolkit'

import { playersApi } from '../services/playerApi'
import { srAPI } from '../services/sr.api'
export default configureStore({
    reducer: {
        [playersApi.reducerPath]: playersApi.reducer, 
        [srAPI.reducerPath]: srAPI.reducer,
    },
})