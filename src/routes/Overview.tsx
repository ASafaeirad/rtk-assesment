import { Stack } from '@mui/material';
import type { Serie } from '@nivo/line';
import { useMemo } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

import { LineChart } from '../components/LineChart';
import type { Overview } from '../data-layer/Domain';
import { getMockedOverview } from '../data-layer/getOverview';

export async function overLoader() {
  const overview = await getMockedOverview(50);

  return { overview };
}

export const OverviewPage = () => {
  const { overview } = useLoaderData() as { overview: Overview };
  const navigation = useNavigation();

  const installs: Serie[] = useMemo(
    () => [
      {
        id: 'installs',
        data: overview.installs.map(({ day, value }) => ({ x: day, y: value })),
      },
    ],
    [overview.installs],
  );

  const revenue: Serie[] = useMemo(
    () => [
      {
        id: 'revenue',
        data: overview.revenue.map(({ day, value }) => ({ x: day, y: value })),
      },
    ],
    [overview.revenue],
  );

  if (navigation.state === 'loading') return <>loading</>;

  return (
    <Stack direction="row" sx={{ width: '100%', height: 300 }}>
      <LineChart data={installs} legend="value" />
      <LineChart data={revenue} legend="value" />
    </Stack>
  );
};
