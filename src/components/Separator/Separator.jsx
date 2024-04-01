import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

function Separator(props) {
  const { extraSpace } = props;

  return (
    <Box sx={{ my: extraSpace ? '42px' : '10px', width: '100%' }}>
      <Box component="hr" sx={{ margin: 0, color: '#fafafa', opacity: '15%' }} />
    </Box>
  );
}

Separator.propTypes = {
  extraSpace: PropTypes.bool,
};

Separator.defaultProps = {
  extraSpace: false,
};

export default Separator;
