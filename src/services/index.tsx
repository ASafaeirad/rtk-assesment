import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { campaignApi } from './campaign';
import { overviewApi } from './overview';

export const store = configureStore({
  reducer: {
    [overviewApi.reducerPath]: overviewApi.reducer,
    [campaignApi.reducerPath]: campaignApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      overviewApi.middleware,
      campaignApi.middleware,
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
