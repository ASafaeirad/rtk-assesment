import { isNullOrEmptyArray } from '@fullstacksjs/toolbox';
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import type { Serie } from '@nivo/line';
import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';

import { LineChart } from '../components/LineChart';
import {
  useCreateCampaignMutation,
  useGetCampaignQuery,
} from '../services/campaign';
import type { Campaign } from '../services/domain';

interface Schema {
  name: string;
}

export const CampaignPage = () => {
  const { data } = useGetCampaignQuery();
  const [selected, setSelected] = useState<Campaign | null>(null);
  const [addCampaign] = useCreateCampaignMutation();
  const { handleSubmit, register, formState } = useForm<Schema>();

  const onSubmit = handleSubmit(({ name }) => {
    addCampaign({ name });
  });

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
  const isEmpty = isNullOrEmptyArray(installs?.[0].data);

  return (
    <Stack spacing={4} padding={4}>
      <Stack spacing={2} onSubmit={onSubmit} component="form">
        <TextField
          {...register('name', { required: true })}
          label="Name"
          placeholder="My Awesome Campaign"
        />
        <Button type="submit" disabled={!formState.isValid} variant="contained">
          Submit
        </Button>
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
      {!isEmpty ? (
        <Box width="50%" height="300px">
          <LineChart data={installs!} legend="installs" />
        </Box>
      ) : (
        <Typography>No Data</Typography>
      )}
    </Stack>
  );
};
