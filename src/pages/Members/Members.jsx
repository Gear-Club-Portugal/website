import PropTypes from 'prop-types';

import PageBody from '~/containers/PageBody';

import { pageBodyType } from '~/types';

function Members(props) {
  const { pageData } = props;

  return <PageBody title={pageData.title} body={pageData.body} image={pageData.image} links={pageData.links} />;
}

Members.propTypes = {
  pageData: PropTypes.shape(pageBodyType).isRequired,
};

export default Members;
