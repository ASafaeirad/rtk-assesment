import type { Serie } from '@nivo/line';
import { ResponsiveLine } from '@nivo/line';

export const LineChart = ({
  data,
  legend,
}: {
  data: Serie[];
  legend: string;
}) => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 50 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 0,
      max: 'auto',
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend,
      legendOffset: 36,
      legendPosition: 'middle',
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'count',
      legendOffset: -40,
      legendPosition: 'middle',
    }}
    pointBorderWidth={2}
    useMesh
    curve="cardinal"
  />
);
