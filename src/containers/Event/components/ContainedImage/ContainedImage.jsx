import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

const imageContainerStyles = { width: '100%', height: '250px' };
const imageStyles = { width: '100%', height: '100%', objectFit: 'contain' };

function ContainedImage(props) {
  const { image } = props;

  return (
    <Box sx={imageContainerStyles}>
      <Box component="img" src={image.url} alt={image.fileName} sx={imageStyles} />
    </Box>
  );
}

ContainedImage.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContainedImage;
