import Box from '@mui/material/Box';

function Separator() {
  return (
    <Box sx={{ px: '16px', my: '10px', width: '100%' }}>
      <Box component="hr" sx={{ margin: 0, color: '#fafafa', opacity: '15%' }} />
    </Box>
  );
}

export default Separator;
