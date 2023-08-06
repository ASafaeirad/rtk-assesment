import { Stack } from '@mui/material';
import type { Serie } from '@nivo/line';
import { useMemo } from 'react';
import { useNavigation } from 'react-router-dom';

import { LineChart } from '../components/LineChart';
import { useGetOverviewQuery } from '../services/overview';

export const OverviewPage = () => {
  const { data: overview } = useGetOverviewQuery();
  const navigation = useNavigation();

  const installs: Serie[] = useMemo(
    () => [
      {
        id: 'installs',
        data:
          overview?.installs.map(({ day, value }) => ({
            x: day,
            y: value,
          })) ?? [],
      },
    ],
    [overview?.installs],
  );

  const revenue: Serie[] = useMemo(
    () => [
      {
        id: 'revenue',
        data:
          overview?.revenue.map(({ day, value }) => ({ x: day, y: value })) ??
          [],
      },
    ],
    [overview?.revenue],
  );

  if (navigation.state === 'loading') return <>loading</>;

  return (
    <Stack direction="row" sx={{ width: '100%', height: 300 }}>
      <LineChart data={installs} legend="value" />
      <LineChart data={revenue} legend="value" />
    </Stack>
  );
};
