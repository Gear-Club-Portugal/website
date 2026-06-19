import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';

import SponsorsGrid from '~/components/SponsorsGrid';
import Separator from '~/components/Separator';

import { sponsorsType } from '~/types';

function Sponsors(props) {
  const { sponsors } = props;
  const { t } = useTranslation();
  const parsedSponsors = useMemo(
    () =>
      sponsors.reduce((acc, sponsor) => ({ ...acc, [sponsor.type]: (acc[sponsor.type] || []).concat(sponsor) }), {}),
    [sponsors],
  );

  return (
    <Box>
      {parsedSponsors.sponsor && <SponsorsGrid title={t('sponsor')} sponsors={parsedSponsors.sponsor} />}

      <Separator />

      {parsedSponsors.partner && <SponsorsGrid title={t('partner')} sponsors={parsedSponsors.partner} />}

      <Separator />

      {parsedSponsors['media-partner'] && (
        <SponsorsGrid title={t('mediaPartner')} sponsors={parsedSponsors['media-partner']} />
      )}
    </Box>
  );
}

Sponsors.propTypes = sponsorsType.isRequired;

export default Sponsors;
