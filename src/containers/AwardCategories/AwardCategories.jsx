import Box from '@mui/material/Box';

import AwardCategory from '~/components/AwardCategory';
import Separator from '~/components/Separator';

import { awardCategoriesType } from '~/types';

function AwardCategories(props) {
  const { categories } = props;

  return (
    <Box>
      {categories.map((category, index) => {
        return (
          <Box key={category.title}>
            <AwardCategory
              title={category.title}
              subtitle={category.subtitle}
              description={category.description}
              votingForm={category.votingForm}
              nominies={category.nominies}
            />

            {index + 1 < categories.length && <Separator extraSpace />}
          </Box>
        );
      })}
    </Box>
  );
}

AwardCategories.propTypes = awardCategoriesType;

export default AwardCategories;
