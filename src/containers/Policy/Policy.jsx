import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Separator from '~/components/Separator';

import useWysiwygParser from '~/hooks/useWysiwygParser.jsx';

import { policyPageType } from '~/types';

const pageStyles = { py: '32px', px: { xs: 0, sm: '16px' }, mt: { xs: 0, sm: '40px' } };

function Policy(props) {
  const {
    policyData: { name, body },
  } = props;
  const parsedBody = useWysiwygParser(body);

  return (
    <Box component="main" sx={pageStyles}>
      <article>
        <Typography variant="h3" sx={{ mb: '15px' }}>
          {name}
        </Typography>

        <Box sx={{ 'p.MuiTypography-root': { margin: 'revert' } }}>{parsedBody}</Box>
      </article>

      <Separator extraSpace />
    </Box>
  );
}

Policy.propTypes = {
  policyData: policyPageType.isRequired,
};

export default Policy;
