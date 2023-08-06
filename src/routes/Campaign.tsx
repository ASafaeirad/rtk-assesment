import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Stack,
  TextField,
} from '@mui/material';
import type { Serie } from '@nivo/line';
import { useMemo, useState } from 'react';

import { LineChart } from '../components/LineChart';
import { useGetCampaignQuery } from '../services/campaign';
import type { Campaign } from '../services/domain';

export const CampaignPage = () => {
  const { data } = useGetCampaignQuery();
  const [selected, setSelected] = useState<Campaign | null>(null);

  console.log(selected);

  const installs: Serie[] | null = useMemo(
    () =>
      selected
        ? [
            {
              id: 'installs',
              data:
                selected.installs.map(({ day, value }) => ({
                  x: day,
                  y: value,
                })) ?? [],
            },
          ]
        : null,
    [selected],
  );

  return (
    <Stack spacing={4} padding={4}>
      <Stack spacing={2} component="form">
        <TextField name="name" placeholder="My Awesome Campaign" />
        <Button variant="contained">Submit</Button>
      </Stack>
      <Divider />
      <Autocomplete
        disablePortal
        id="campaign"
        onChange={(_, item) => {
          setSelected(item);
        }}
        value={selected}
        options={data ?? []}
        getOptionLabel={d => d.name}
        sx={{ width: 300 }}
        renderInput={params => <TextField {...params} label="Campaign" />}
      />
      {installs ? (
        <Box width="50%" height="300px">
          <LineChart data={installs} legend="installs" />
        </Box>
      ) : null}
    </Stack>
  );
};
