import { configureStore } from '@reduxjs/toolkit'

import { playersApi } from '../services/playerApi'
import { nbaISApi } from '../services/nbaIS'
import { sportsradar } from '../services/sportsradar'
export default configureStore({
    reducer: {
        [playersApi.reducerPath]: playersApi.reducer, 
        [nbaISApi.reducerPath]: nbaISApi.reducer,
        [sportsradar.reducerPath]: sportsradar.reducer,
        
    },
})