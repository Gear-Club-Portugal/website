import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import LinkButton from '~/components/LinkButton';
import Separator from '~/components/Separator';

import useWysiwygParser from '~/hooks/useWysiwygParser.jsx';

import config from '~/config.toml';

const wysiwygVariantMapping = { h4: 'h4', body1: 'body1' };

const wysiwygVariantStyles = {
  '.MuiTypography-body1': { fontSize: '16px' },
  '.MuiTypography-h4': { fontSize: '20px' },
};

function Event(props) {
  const { events } = props;
  const { t } = useTranslation();
  const { slug } = useParams();
  const [event, setEvent] = useState();
  const eventDescription = useWysiwygParser(event?.description ?? '', wysiwygVariantMapping);
  const eventProgram = useWysiwygParser(event?.program ?? '', wysiwygVariantMapping);
  const eventPacks = useWysiwygParser(event?.packs ?? '', wysiwygVariantMapping);

  useEffect(() => {
    window.scrollTo(0, 0);
    setEvent(events.find((e) => e.slug === slug));
  }, [events, slug]);

  return (
    <Box component="main">
      {event ? (
        <Box component="article" sx={{ py: '32px', px: { xs: 0, sm: '16px' }, mt: { xs: 0, sm: '40px' } }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Box sx={{ width: '100%', height: '250px' }}>
                <Box
                  component="img"
                  src={event.mainImage.url}
                  alt={event.mainImage.fileName}
                  sx={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={8}>
              <Typography variant="h3" sx={{ my: { xs: '16px', sm: 0 }, mb: { xs: 0, sm: '16px' } }}>
                {event.name}
              </Typography>

              <Box>{eventDescription}</Box>

              <Box sx={{ mt: '16px' }}>
                <LinkButton external link={event.registerForm} text={t('enrollmentForm')} />
              </Box>

              <Box sx={{ mt: '16px' }}>
                <LinkButton external link={config.events.calendar} text={t('addToCalendar')} />
              </Box>

              <Separator extraSpace />

              <Box>
                <Typography variant="h3" sx={{ pb: '16px' }}>
                  {t('program')}
                </Typography>

                <Box sx={wysiwygVariantStyles}>{eventProgram}</Box>
              </Box>

              <Separator extraSpace />

              <Box>
                <Typography variant="h3" sx={{ pb: '16px' }}>
                  {t('packs')}
                </Typography>

                <Box sx={wysiwygVariantStyles}>{eventPacks}</Box>
              </Box>

              <Box sx={{ mt: '16px' }}>
                <LinkButton external link={event.registerForm} text={t('enrollmentForm')} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box />
      )}

      <Separator extraSpace />
    </Box>
  );
}

Event.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      shortName: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      packs: PropTypes.string.isRequired,
      program: PropTypes.string.isRequired,
      eventDate: PropTypes.string.isRequired,
      textualEventDate: PropTypes.string.isRequired,
      mainImage: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      location: PropTypes.string.isRequired,
      registerForm: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Event;
