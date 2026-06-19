import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Separator from '~/components/Separator';

import PageBody from '~/containers/PageBody';
import AwardCategories from '~/containers/AwardCategories';

import { pageBodyType, awardCategoriesType } from '~/types';

function groupByYear(categories) {
  const yearsMap = {};
  categories.forEach((category) => {
    category.winners.forEach((winner) => {
      if (!yearsMap[winner.year]) yearsMap[winner.year] = {};
      if (!yearsMap[winner.year][category.title]) {
        yearsMap[winner.year][category.title] = { order: category.order, title: category.title, description: category.description, winners: [] };
      }
      yearsMap[winner.year][category.title].winners.push(winner);
    });
  });

  return Object.keys(yearsMap)
    .sort((a, b) => b - a)
    .map((year) => ({
      year,
      categories: Object.values(yearsMap[year]).sort((a, b) => a.order - b.order),
    }));
}

function GcpAwards(props) {
  const { pageData, awardCategories } = props;
  const awardsByYear = groupByYear(awardCategories);

  return (
    <PageBody title={pageData.title} body={pageData.body} image={pageData.image} links={pageData.links}>
      {awardsByYear.map(({ year, categories }, index) => (
        <Box key={year}>
          <Typography variant="h3">{year}</Typography>

          <Separator extraSpace />

          <AwardCategories categories={categories} />

          {index + 1 < awardsByYear.length && <Separator extraSpace />}
        </Box>
      ))}
    </PageBody>
  );
}

GcpAwards.propTypes = {
  pageData: PropTypes.shape(pageBodyType).isRequired,
  awardCategories: awardCategoriesType,
};

export default GcpAwards;
