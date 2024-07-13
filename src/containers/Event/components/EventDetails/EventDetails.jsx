import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const wysiwygStyles = { h4: 'h4', body1: 'body1' };

function EventDetails(props) {
  const { title, body } = props;

  return (
    <Box>
      <Typography variant="h3" sx={{ pb: '16px' }}>
        {title}
      </Typography>

      <Box sx={wysiwygStyles}>{body}</Box>
    </Box>
  );
}

EventDetails.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.object.isRequired,
};

export default EventDetails;
