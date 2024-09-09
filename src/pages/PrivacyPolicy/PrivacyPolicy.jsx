import Policy from '~/containers/Policy';

import { policyPageType } from '~/types';

function PrivacyPolicy(props) {
  const { policyData } = props;

  return <Policy policyData={policyData} />;
}

PrivacyPolicy.propTypes = {
  policyData: policyPageType.isRequired,
};

export default PrivacyPolicy;
