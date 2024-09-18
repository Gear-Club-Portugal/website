import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { sponsorsGridType } from '~/types';

import Sponsor from './Sponsor.jsx';

function SponsorsGrid(props) {
  const { title, sponsors } = props;

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: '16px' }}>
        {title}
      </Typography>

      <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap', mb: '16px' }}>
        {sponsors.map((sponsor) => (
          <Sponsor key={`${sponsor.type}-${sponsor.name}`} name={sponsor.name} logo={sponsor.logo} url={sponsor.url} />
        ))}
      </Stack>
    </Box>
  );
}

SponsorsGrid.propTypes = sponsorsGridType.isRequired;

export default SponsorsGrid;
