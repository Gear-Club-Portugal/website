import Policy from '~/containers/Policy';

import { policyPageType } from '~/types';

function TermsOfUse(props) {
  const { policyData } = props;

  return <Policy policyData={policyData} />;
}

TermsOfUse.propTypes = {
  policyData: policyPageType.isRequired,
};

export default TermsOfUse;
