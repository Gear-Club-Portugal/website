import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import GCPLogoImage from '../../assets/logo_app_bar_round.png';

function GCPLogo() {
  return (
    <Box component={Link} to="" sx={{ flexGrow: 1, display: 'flex', textDecoration: 'none', color: '#fff' }}>
      <Box component="img" src={GCPLogoImage} sx={{ height: '46px', marginRight: '16px' }} />
      <Typography variant="h6" component="div" sx={{ textTransform: 'uppercase' }}>
        Gear Club Portugal
      </Typography>
    </Box>
  );
}

export default GCPLogo;
