import PropTypes from 'prop-types';

import PageBody from '~/containers/PageBody';

import { pageBodyType } from '~/types';

function Ecmc(props) {
  const { pageData } = props;

  return <PageBody title={pageData.title} body={pageData.body} image={pageData.image} links={pageData.links} />;
}

Ecmc.propTypes = {
  pageData: PropTypes.shape(pageBodyType).isRequired,
};

export default Ecmc;
