import { useLocation } from 'react-router-dom';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Pagination from '~/components/Pagination';
import PostPreview from '~/components/PostPreview';

import useOrderPosts from '~/hooks/useOrderPosts';
import useArrayChunk from '~/hooks/useArrayChunk';

import { postsType, langType } from '~/types';

const itemsPerPage = 12;

function BlogPostGrid(props) {
  const { posts, lang } = props;
  const pages = Math.ceil(posts.length / itemsPerPage);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = Math.min(Math.max(parseInt(query.get('page') || '1', 10), 1), pages);

  const sortedPosts = useOrderPosts(posts, true);
  const pagePosts = useArrayChunk(sortedPosts, itemsPerPage);

  return (
    <Box>
      <Grid container spacing={2} sx={{ mb: '16px' }}>
        {pagePosts[page - 1]?.map((post) => (
          <Grid key={post.slug} item xs={12} sm={4}>
            <PostPreview post={post} lang={lang} />
          </Grid>
        ))}
      </Grid>

      {pages > 1 && <Pagination count={pages} page={page} />}
    </Box>
  );
}

BlogPostGrid.propTypes = {
  posts: postsType,
  lang: langType,
};

export default BlogPostGrid;
