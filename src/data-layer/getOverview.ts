import { sleep } from '@fullstacksjs/toolbox';

import type { Overview } from './Domain';

const mock: Overview = {
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

export const getOverview = async (): Promise<Overview> => {
  const res = await fetch(
    'https://5c3db915a9d04f0014a98a79.mockapi.io/overview',
  );
  return res.json();
};

export const getMockedOverview = async (delay: number): Promise<Overview> => {
  await sleep(delay);
  return Promise.resolve(mock);
};
