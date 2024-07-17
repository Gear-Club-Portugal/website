import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { fontWeight } from '~/theme.js';
import { authorType } from '~/types';

const headerContainerStyles = { my: '8px', display: 'flex', flexDirection: 'row', alignItems: 'center' };
const titleStyles = { my: { xs: '16px', sm: 0 }, mb: { xs: 0, sm: '16px' } };
const avatarStyles = { width: '100%', height: '100%', objectFit: 'cover' };
const categoryStyles = { py: '8px', px: '10px', backgroundColor: '#00000080', color: '#ffffff' };
const publishedAtStyles = {
  fontSize: { xs: '8px' },
  fontWeight: { xs: fontWeight.regular },
  lineHeight: { xs: 'normal' },
};

function ArticleHeader(props) {
  const { author, category, publishedAt, title } = props;

  return (
    <Box>
      <Typography variant="h3" sx={titleStyles}>
        {title}
      </Typography>

      <Box sx={headerContainerStyles}>
        <Box sx={{ width: '32px', height: '32px' }}>
          <Box component="img" src={author.avatar.url} alt={author.avatar.fileName} sx={avatarStyles} />
        </Box>

        <Box sx={{ flexGrow: 1, mx: '10px' }}>
          <Typography variant="body2">{author.name}</Typography>
          <Typography sx={publishedAtStyles}>{publishedAt}</Typography>
        </Box>

        <Box>
          <Typography variant="body2" sx={categoryStyles}>
            {category}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

ArticleHeader.propTypes = {
  author: authorType.isRequired,
  category: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ArticleHeader;
