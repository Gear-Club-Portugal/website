import PropTypes from 'prop-types';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const itemStyles = {
  py: '20px',
  px: '24px',
  height: { xs: '300px', sm: '600px' },
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 0,
  position: 'relative',
  overflow: 'hidden',
};

const imgStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
};

const titleStyles = { background: '#ffffff', opacity: '80%', color: '#000000', p: '4px 8px', width: 'max-content' };
const subtitleStyles = { ...titleStyles, color: '#940607' };

function ImageHero(props) {
  const { item, onHero } = props;

  return (
    <Paper
      sx={{
        ...itemStyles,
        height: item.height ? item.height : itemStyles.height,
      }}
    >
      <Box component="img" src={item.image} alt={item.title} sx={imgStyles} />

      <Box sx={{ flexGrow: 1, position: 'relative' }}>
        <Box>
          <Typography variant={onHero ? 'h1' : 'h4'} sx={titleStyles}>
            {item.title}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ position: 'relative' }}>
        <Typography variant="h6" sx={subtitleStyles}>
          {item.subtitle1}
        </Typography>
        <Typography sx={{ ...subtitleStyles, mt: '4px' }}>{item.subtitle2}</Typography>
      </Box>
    </Paper>
  );
}

ImageHero.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle1: PropTypes.string.isRequired,
    subtitle2: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    height: PropTypes.shape({
      xs: PropTypes.string.isRequired,
      sm: PropTypes.string.isRequired,
    }),
  }),
  onHero: PropTypes.bool,
};

ImageHero.defaultProps = {
  onHero: true,
};

export default ImageHero;
