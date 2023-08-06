import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Overview } from './domain';

const mockOverview: Overview = {
  installs: [
    { day: 'monday', value: 145 },
    { day: 'tuesday', value: 256 },
    { day: 'wednesday', value: 190 },
    { day: 'thursday', value: 204 },
    { day: 'friday', value: 120 },
    { day: 'saturday', value: 156 },
    { day: 'sunday', value: 135 },
  ],
  revenue: [
    { day: 'monday', value: 45.7 },
    { day: 'tuesday', value: 50.3 },
    { day: 'wednesday', value: 34.6 },
    { day: 'thursday', value: 54.8 },
    { day: 'friday', value: 67.4 },
    { day: 'saturday', value: 20.5 },
    { day: 'sunday', value: 43.8 },
  ],
};

export const overviewApi = createApi({
  reducerPath: 'overview',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.PUBLIC_OVERVIEW_ENDPOINT,
  }),
  tagTypes: ['Overview'],
  endpoints: build => ({
    getOverview: build.query<Overview, void>({
      // query: () => ({ url: `overview` }),
      queryFn: () => Promise.resolve({ data: mockOverview }),
    }),
  }),
});

export const { useGetOverviewQuery } = overviewApi;
