import Box from '@mui/material/Box';
// import CardMedia from '@mui/material/CardMedia';

import { sponsorType } from '~/types';

const mediaStyles = { height: '100px', objectFit: 'contain', borderRadius: '13px' };

function Sponsor(props) {
  const { name, logo } = props;

  return (
    <Box sx={{display: 'inline', mr: '16px', mb: '16px'}}>
      <Box component="img" src={logo.url} alt={`${name} logo`} sx={mediaStyles} />
    </Box>
  );
}

Sponsor.propTypes = sponsorType.isRequired;

export default Sponsor;
