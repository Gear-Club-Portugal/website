import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const slideStyles = {
  py: '20px',
  px: '24px',
  height: { xs: '300px', sm: '600px' },
  display: 'flex',
  flexDirection: 'column',
};
const tytleStyles = { background: '#ffffff', opacity: '80%', color: '#000000', p: '4px 8px', width: 'max-content' };
const subtitleStyles = { ...tytleStyles, color: '#940607' };

function BannerHero(props) {
  const { items } = props;

  return (
    <Carousel
      indicators={false}
      navButtonsAlwaysInvisible={false}
      sx={{ width: { xs: '100vw', sm: '100%' }, ml: { xs: 'calc((-100vw + 100%)/2)', sm: '0' } }}
    >
      {items.map((item) => (
        <Paper
          key={item.title}
          sx={{
            ...slideStyles,
            background: `url("${item.image}") no-repeat center center`,
            backgroundSize: 'cover',
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <Box>
              <Typography variant="h1" sx={tytleStyles}>
                {item.title}
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" sx={subtitleStyles}>
              {item.subtitle1}
            </Typography>
            <Typography sx={{ ...subtitleStyles, mt: '4px' }}>{item.subtitle2}</Typography>
          </Box>
        </Paper>
      ))}
    </Carousel>
  );
}

BannerHero.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle1: PropTypes.string.isRequired,
      subtitle2: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BannerHero;
