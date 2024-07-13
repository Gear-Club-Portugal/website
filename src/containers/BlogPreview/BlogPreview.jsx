import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { postsType, routesType } from '~/types';

import PostPreview from './components/PostPreview';
import LinkButton from '~/components/LinkButton';

function BlogPreview(props) {
  const { posts, routes } = props;
  const { t } = useTranslation();

  return (
    <Box>
      <Typography variant="h3" sx={{ mb: '15px' }}>
        {t('blog')}
      </Typography>

      <Grid container spacing={2}>
        {posts.map((post) => {
          return (
            <Grid key={post.slug} item xs={12} sm={4}>
              <PostPreview post={post} />
            </Grid>
          );
        })}
      </Grid>

      <Box sx={{ mt: '16px' }}>
        <LinkButton link={routes.blog.slug} text={t('moreBlogs')} />
      </Box>
    </Box>
  );
}

BlogPreview.propTypes = {
  posts: postsType,
  routes: routesType,
};

export default BlogPreview;
