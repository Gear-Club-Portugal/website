import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { eventType } from '~/types';

import ContainedImage from '~/components/ContainedImage';
import LinkButton from '~/components/LinkButton';
import Separator from '~/components/Separator';

import EventDetails from './components/EventDetails';

import useWysiwygParser from '~/hooks/useWysiwygParser.jsx';

const wysiwygVariantMapping = { h4: 'h4', body1: 'body1' };

const eventContainerStyles = { py: '32px', px: { xs: 0, sm: '16px' }, mt: { xs: 0, sm: '40px' } };

function Event(props) {
  const { event } = props;
  const { t } = useTranslation();
  const eventDescription = useWysiwygParser(event?.description, wysiwygVariantMapping);
  const eventProgram = useWysiwygParser(event?.program, wysiwygVariantMapping);
  const eventPacks = useWysiwygParser(event?.packs, wysiwygVariantMapping);

  const registrationButton = () => {
    return (
      <Box sx={{ mt: '16px' }}>
        <LinkButton external link={event.registerForm} text={t('enrollmentForm')} />
      </Box>
    );
  };

  console.log(event);

  return (
    <Box component="article" sx={eventContainerStyles}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <ContainedImage image={event.mainImage} />
        </Grid>

        <Grid item xs={12} sm={8}>
          <EventDetails title={event.name} body={eventDescription} />

          {event.registerForm && registrationButton()}

          <Box sx={{ mt: '16px' }}>
            <LinkButton external link={''} text={t('addToCalendar')} />
          </Box>

          {event?.program && (
            <>
              <Separator extraSpace />

              <EventDetails title={t('program')} body={eventProgram} />
            </>
          )}

          {event?.packs && (
            <>
              <Separator extraSpace />

              <EventDetails title={t('packs')} body={eventPacks} />
            </>
          )}

          {event.registerForm && (event.program || event.packs) && registrationButton()}
        </Grid>
      </Grid>
    </Box>
  );
}

Event.propTypes = { event: eventType };

export default Event;
