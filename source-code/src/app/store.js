import { configureStore } from '@reduxjs/toolkit'

import { playersApi } from '../services/playerApi'

export default configureStore({
    reducer: {
        [playersApi.reducerPath]: playersApi.reducer, 
        
    },
})