import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import BlogPostGrid from '~/containers/BlogPostGrid';

import { postsType, langType } from '~/types';

function Blog(props) {
  const { posts, lang } = props;
  const { t } = useTranslation();

  return (
    <Box component="main">
      <Typography variant="h3" sx={{ mb: '15px', mt: '40px' }}>
        {t('blog')}
      </Typography>

      <BlogPostGrid posts={posts} lang={lang} />
    </Box>
  );
}

Blog.propTypes = { posts: postsType, lang: langType };

export default Blog;
