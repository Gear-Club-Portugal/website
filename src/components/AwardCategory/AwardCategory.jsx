import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import NominieeCard from '~/components/NominieeCard';

import { awardCategoryType } from '~/types';
import { fontWeight } from '~/theme.js';

import { categoryTitle as categoryTitleStyles, nominieesHeaderTitle as nominieesHeaderTitleStyles } from './styles.js';

function AwardCategory(props) {
  const { title, description, winners } = props;
  const { t } = useTranslation();

  return (
    <Box>
      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h6" sx={categoryTitleStyles} color="text.secondary">
          {title}
        </Typography>

        <Typography variant="body2" sx={{ fontWeight: fontWeight.regular }}>
          {description}
        </Typography>
      </Box>

      {winners.length > 0 && (
        <Box>
          <Typography variant="h6" sx={nominieesHeaderTitleStyles}>
            {t('winners', { count: winners.length })}
          </Typography>

          <Box>
            {winners.map((winner) => (
              <NominieeCard
                key={`${winner.year}-${winner.name}`}
                year={winner.year}
                name={winner.name}
                description={winner.description}
                logo={winner.logo}
                link={winner.link}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}

AwardCategory.propTypes = awardCategoryType;

export default AwardCategory;
