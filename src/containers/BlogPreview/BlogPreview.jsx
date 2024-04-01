import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import PostPreview from './components/PostPreview';
import ExternalLinkButton from '~/components/ExternalLinkButton';

function BlogPreview(props) {
  const { posts, routes } = props;
  const { t } = useTranslation();

  return (
    <Box>
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
        <ExternalLinkButton link={routes.blog.slug} text={t('moreBlogs')} />
      </Box>
    </Box>
  );
}

BlogPreview.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      publishedAt: PropTypes.string.isRequired,
      mainImage: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.shape({
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      body: PropTypes.string.isRequired,
    }),
  ).isRequired,
  routes: PropTypes.object.isRequired,
};

export default BlogPreview;
