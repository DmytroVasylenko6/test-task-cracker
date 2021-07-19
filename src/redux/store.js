import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import crackersReducer from './crackers/crackers-reducer';


const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
        }
    })
]

const authPersistConfig = {
    key: 'crackersBasket',
    storage,
}




export const store = configureStore({
    reducer: persistReducer(authPersistConfig, crackersReducer),
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store);

