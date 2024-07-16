import Box from '@mui/material/Box';

import { imageType } from '~/types';

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

ContainedImage.propTypes = { image: imageType };

export default ContainedImage;
