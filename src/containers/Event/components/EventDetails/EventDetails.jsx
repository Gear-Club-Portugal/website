import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { theme } from '~/theme.js';

const wysiwygStyles = {
  '& p': { ...theme.typography.caption, fontStyle: 'italic' },
  '& h5': { ...theme.typography.body1, marginTop: '16px' },
  'h4:not(:first-of-type)': { marginTop: '48px' },
};

function EventDetails(props) {
  const { title, body, enableStylesOverride } = props;

  return (
    <Box>
      <Typography variant="h3" sx={{ pb: '16px' }}>
        {title}
      </Typography>

      <Box sx={enableStylesOverride ? wysiwygStyles : {}}>{body}</Box>
    </Box>
  );
}

EventDetails.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.any.isRequired,
  enableStylesOverride: PropTypes.bool,
};

export default EventDetails;
