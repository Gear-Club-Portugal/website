import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box>
      <Typography sx={{ mt: '46px', textAlign: 'center' }}>{new Date().getFullYear()} © Gear Club Portugal</Typography>
    </Box>
  );
}

export default Footer;
