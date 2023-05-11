import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './root.reducer';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
