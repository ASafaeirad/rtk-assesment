import { randomInt } from '@fullstacksjs/toolbox';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Campaign } from './domain';

const mockCampaign: Campaign[] = [
  {
    id: '08a92372-9c8a-4649-b627-2e503b839c67',
    name: 'campaign 1',
    installs: [
      { day: 'monday', value: 45 },
      { day: 'tuesday', value: 56 },
      { day: 'wednesday', value: 22 },
      { day: 'thursday', value: 52 },
      { day: 'friday', value: 30 },
      { day: 'saturday', value: 32 },
      { day: 'sunday', value: 32 },
    ],
  },
  {
    id: 'edc6012f-4983-47dc-b1ce-b09dea89f847',
    name: 'campaign 2',
    installs: [
      { day: 'monday', value: 10 },
      { day: 'tuesday', value: 15 },
      { day: 'wednesday', value: 55 },
      { day: 'thursday', value: 78 },
      { day: 'friday', value: 45 },
      { day: 'saturday', value: 50 },
      { day: 'sunday', value: 20 },
    ],
  },
  {
    id: '79cfe6c8-f267-42eb-bc01-d93e0cc8315a',
    name: 'campaign 3',
    installs: [
      { day: 'monday', value: 45 },
      { day: 'tuesday', value: 65 },
      { day: 'wednesday', value: 54 },
      { day: 'thursday', value: 57 },
      { day: 'friday', value: 30 },
      { day: 'saturday', value: 40 },
      { day: 'sunday', value: 51 },
    ],
  },
  {
    id: '1427e2fb-36de-402c-a471-644ad67d2e8e',
    name: 'campaign 4',
    installs: [
      { day: 'monday', value: 10 },
      { day: 'tuesday', value: 5 },
      { day: 'wednesday', value: 13 },
      { day: 'thursday', value: 23 },
      { day: 'friday', value: 11 },
      { day: 'saturday', value: 8 },
      { day: 'sunday', value: 3 },
    ],
  },
];

export const campaignApi = createApi({
  reducerPath: 'campaign',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.PUBLIC_CAMPAIGN_ENDPOINT,
  }),
  tagTypes: ['Campaign'],
  endpoints: build => ({
    getCampaign: build.query<Campaign[], void>({
      // query: () => ({ url: `campaign` }),
      queryFn: () => Promise.resolve({ data: mockCampaign }),
    }),
    createCampaign: build.mutation<
      { status: 201; id: string },
      { name: string }
    >({
      queryFn() {
        return Promise.resolve({
          data: { status: 201, id: randomInt().toString() },
        });
      },
      onQueryStarted({ name }, { dispatch }) {
        dispatch(
          campaignApi.util.updateQueryData('getCampaign', undefined, draft => {
            const optimistic: Campaign = {
              id: randomInt().toString(),
              name,
              installs: [],
            };
            draft.push(optimistic);
          }),
        );
      },
    }),
  }),
});

export const { useGetCampaignQuery, useCreateCampaignMutation } = campaignApi;
