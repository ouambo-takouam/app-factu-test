import { persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducer from './root.reducer';
import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
	// ...options
});

const middlewares = [sagaMiddleware, logger];

const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middlewares),
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
