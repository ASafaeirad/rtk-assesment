import { useLoaderData, useNavigation } from 'react-router-dom';

import type { Overview } from '../data-layer/Domain';
import { getMockedOverview } from '../data-layer/getOverview';

export async function overLoader() {
  const overview = await getMockedOverview(50);

  return { overview };
}

export const OverviewPage = () => {
  const { overview } = useLoaderData() as { overview: Overview };
  const navigation = useNavigation();

  if (navigation.state === 'loading') return <>loading</>;

  return <div>{JSON.stringify(overview, undefined, 2)}</div>;
};
