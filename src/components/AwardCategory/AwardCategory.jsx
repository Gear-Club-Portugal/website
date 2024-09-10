import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import NominieeCard from '~/components/NominieeCard';
import LinkButton from '~/components/LinkButton';

import { awardCategoryType } from '~/types';
import { fontWeight } from '~/theme.js';

import { categoryTitle as categoryTitleStyles, nominieesHeaderTitle as nominieesHeaderTitleStyles } from './styles.js';

function AwardCategory(props) {
  const { title, subtitle, description, votingForm, nominies } = props;
  const { t } = useTranslation();

  return (
    <Box>
      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h6" sx={categoryTitleStyles} color="text.secondary">
          {title}
        </Typography>

        <Typography variant="h4" sx={{ marginBottom: '16px' }}>
          {subtitle}
        </Typography>

        <Typography variant="body2" sx={{ fontWeight: fontWeight.regular }}>
          {description}
        </Typography>
      </Box>

      <Box>
        {nominies.length > 0 && (
          <>
            <Typography variant="h6" sx={nominieesHeaderTitleStyles}>
              {t('nominiees')}
            </Typography>

            <Box>
              {nominies.map((nominiee) => (
                <NominieeCard
                  key={nominiee.name}
                  name={nominiee.name}
                  description={nominiee.description}
                  logo={nominiee.logo}
                />
              ))}
            </Box>
          </>
        )}

        {votingForm && <LinkButton external link={votingForm} text={t('voteHere')} />}
      </Box>
    </Box>
  );
}

AwardCategory.propTypes = awardCategoryType;

export default AwardCategory;
