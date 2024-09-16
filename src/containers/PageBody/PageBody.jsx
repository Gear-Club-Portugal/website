import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ContainedImage from '~/components/ContainedImage';
import LinkButton from '~/components/LinkButton';
import Separator from '~/components/Separator';

import useWysiwygParser from '~/hooks/useWysiwygParser.jsx';

import { pageBodyType } from '~/types';

const pageStyles = { py: '32px', px: { xs: 0, sm: '16px' }, mt: { xs: 0, sm: '40px' } };

function PageBody(props) {
  const { title, body, footer, image, links, children } = props;
  const parsedBody = useWysiwygParser(body);
  const parsedFooter = useWysiwygParser(footer);

  return (
    <Box component="main" sx={pageStyles}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <ContainedImage image={image} />
        </Grid>

        <Grid item xs={12} sm={8}>
          <Typography variant="h3" sx={{ mb: '15px' }}>
            {title}
          </Typography>

          <Box sx={{ 'p.MuiTypography-root': { margin: 'revert' } }}>{parsedBody}</Box>

          {links.map((link) => (
            <Box key={link.href} sx={{ my: '8px' }}>
              <LinkButton external link={link.href} text={link.text} />
            </Box>
          ))}

          {children && (
            <>
              <Separator extraSpace />

              {children}
            </>
          )}

          {parsedFooter && (
            <>
              <Separator extraSpace />
              <Box sx={{ 'p.MuiTypography-root': { margin: 'revert' } }}>{parsedFooter}</Box>
            </>
          )}
        </Grid>
      </Grid>

      <Separator extraSpace />
    </Box>
  );
}

PageBody.propTypes = pageBodyType;

export default PageBody;
