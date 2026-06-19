import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import LinkButton from '~/components/LinkButton';

import { winnerType } from '~/types';
import { fontWeight } from '~/theme.js';

import {
  card as cardStyles,
  cardMediaContainer as cardMediaContainerStyles,
  cardMedia as cardMediaStyles,
  cardContentContainer as cardContentContainerStyles,
  cardContent as cardContentStyles,
} from './styles.js';

function NominieeCard(props) {
  const { name, description, logo, link } = props;

  return (
    <Card sx={cardStyles} raised={false}>
      <Box sx={cardMediaContainerStyles}>
        <CardMedia component="img" sx={cardMediaStyles} image={logo.url} alt={logo.fileName} />
      </Box>

      <Box sx={cardContentContainerStyles}>
        <CardContent sx={cardContentStyles}>
          <Typography variant="h4">{name}</Typography>

          {link && (
            <Box sx={{ marginTop: '16px' }}>
              <LinkButton external link={link} text={name} />
            </Box>
          )}
        </CardContent>
      </Box>
    </Card>
  );
}

NominieeCard.propTypes = {
  ...winnerType,
  link: PropTypes.string,
};

export default NominieeCard;
