import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: 'japan',
    color: 'hsl(296, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 287,
      },
      {
        x: 'helicopter',
        y: 32,
      },
      {
        x: 'boat',
        y: 189,
      },
      {
        x: 'train',
        y: 65,
      },
      {
        x: 'subway',
        y: 20,
      },
      {
        x: 'bus',
        y: 212,
      },
      {
        x: 'car',
        y: 234,
      },
      {
        x: 'moto',
        y: 237,
      },
      {
        x: 'bicycle',
        y: 286,
      },
      {
        x: 'horse',
        y: 83,
      },
      {
        x: 'skateboard',
        y: 256,
      },
      {
        x: 'others',
        y: 12,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(132, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 145,
      },
      {
        x: 'helicopter',
        y: 28,
      },
      {
        x: 'boat',
        y: 220,
      },
      {
        x: 'train',
        y: 283,
      },
      {
        x: 'subway',
        y: 139,
      },
      {
        x: 'bus',
        y: 230,
      },
      {
        x: 'car',
        y: 202,
      },
      {
        x: 'moto',
        y: 91,
      },
      {
        x: 'bicycle',
        y: 6,
      },
      {
        x: 'horse',
        y: 140,
      },
      {
        x: 'skateboard',
        y: 6,
      },
      {
        x: 'others',
        y: 161,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(342, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 125,
      },
      {
        x: 'helicopter',
        y: 159,
      },
      {
        x: 'boat',
        y: 192,
      },
      {
        x: 'train',
        y: 225,
      },
      {
        x: 'subway',
        y: 74,
      },
      {
        x: 'bus',
        y: 128,
      },
      {
        x: 'car',
        y: 189,
      },
      {
        x: 'moto',
        y: 120,
      },
      {
        x: 'bicycle',
        y: 178,
      },
      {
        x: 'horse',
        y: 64,
      },
      {
        x: 'skateboard',
        y: 35,
      },
      {
        x: 'others',
        y: 205,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(7, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 218,
      },
      {
        x: 'helicopter',
        y: 79,
      },
      {
        x: 'boat',
        y: 297,
      },
      {
        x: 'train',
        y: 77,
      },
      {
        x: 'subway',
        y: 160,
      },
      {
        x: 'bus',
        y: 282,
      },
      {
        x: 'car',
        y: 254,
      },
      {
        x: 'moto',
        y: 51,
      },
      {
        x: 'bicycle',
        y: 7,
      },
      {
        x: 'horse',
        y: 85,
      },
      {
        x: 'skateboard',
        y: 123,
      },
      {
        x: 'others',
        y: 297,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(336, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 24,
      },
      {
        x: 'helicopter',
        y: 31,
      },
      {
        x: 'boat',
        y: 136,
      },
      {
        x: 'train',
        y: 13,
      },
      {
        x: 'subway',
        y: 11,
      },
      {
        x: 'bus',
        y: 236,
      },
      {
        x: 'car',
        y: 19,
      },
      {
        x: 'moto',
        y: 30,
      },
      {
        x: 'bicycle',
        y: 31,
      },
      {
        x: 'horse',
        y: 180,
      },
      {
        x: 'skateboard',
        y: 199,
      },
      {
        x: 'others',
        y: 88,
      },
    ],
  },
];
export const LineChart = () => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: 'point' }}
    yScale={{
      type: 'linear',
      min: 'auto',
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
      legend: 'transportation',
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
    pointSize={10}
    pointColor={{ theme: 'background' }}
    pointBorderWidth={2}
    pointBorderColor={{ from: 'serieColor' }}
    pointLabelYOffset={-12}
    useMesh
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'column',
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: 'left-to-right',
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: 'circle',
        symbolBorderColor: 'rgba(0, 0, 0, .5)',
        effects: [
          {
            on: 'hover',
            style: {
              itemBackground: 'rgba(0, 0, 0, .03)',
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);
