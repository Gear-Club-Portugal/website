import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';

import SponsorsGrid from '~/components/SponsorsGrid';
import Separator from '~/components/Separator';

import { sponsorsType } from '~/types';

function Sponsors(props) {
  const { sponsors } = props;
  const [parsedSponsors, setParsedSponsors] = useState({});

  useEffect(() => {
    const parsedSponsorsTmp = {};

    sponsors.map(
      (sponsor) => (parsedSponsorsTmp[sponsor.type] = (parsedSponsorsTmp[sponsor.type] || []).concat(sponsor)),
    );

    setParsedSponsors(parsedSponsorsTmp);
  }, [sponsors]);

  return (
    <Box>
      {parsedSponsors.sponsor && <SponsorsGrid title="Sponsor" sponsors={parsedSponsors.sponsor} />}

      <Separator />

      {parsedSponsors.partner && <SponsorsGrid title="Partner" sponsors={parsedSponsors.partner} />}

      <Separator />

      {parsedSponsors['media-partner'] && (
        <SponsorsGrid title="Media Partner" sponsors={parsedSponsors['media-partner']} />
      )}
    </Box>
  );
}

Sponsors.propTypes = sponsorsType.isRequired;

export default Sponsors;
