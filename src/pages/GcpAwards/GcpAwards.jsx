import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';

import Separator from '~/components/Separator';

import PageBody from '~/containers/PageBody';
import AwardCategories from '~/containers/AwardCategories';

import { pageBodyType, awardCategoriesType } from '~/types';

function GcpAwards(props) {
  const { pageData, awardCategories } = props;
  const { t } = useTranslation();

  return (
    <PageBody title={pageData.title} body={pageData.body} image={pageData.image} links={pageData.links}>
      <Typography variant="h3">{t('categories')}</Typography>

      <Separator extraSpace />

      <AwardCategories categories={awardCategories} />
    </PageBody>
  );
}

GcpAwards.propTypes = {
  pageData: PropTypes.shape(pageBodyType).isRequired,
  awardCategories: awardCategoriesType,
};

export default GcpAwards;
