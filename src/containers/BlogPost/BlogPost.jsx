import { postType } from '~/types';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ContainedImage from '~/components/ContainedImage';

import useWysiwygParser from '~/hooks/useWysiwygParser.jsx';
import { useCapHeightOffset } from '~/hooks/useCapHeightOffset';

import ArticleHeader from './components/ArticleHeader';

const articleStyles = { py: '32px', px: { xs: 0, sm: '16px' }, mt: { xs: 0, sm: '40px' } };

function BlogPost(props) {
  const { post } = props;

  const imageTopOffset = useCapHeightOffset('h3');
  const articleBody = useWysiwygParser(post?.body);

  return (
    <Box component="article" sx={articleStyles}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ mt: { sm: imageTopOffset } }}>
            <ContainedImage image={post.mainImage} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={8}>
          <ArticleHeader
            author={post.author}
            category={post.category}
            publishedAt={post.publishedAt}
            title={post.title}
          />

          <Box sx={{ 'p.MuiTypography-root': { margin: 'revert' } }}>{articleBody}</Box>
        </Grid>
      </Grid>
    </Box>
  );
}

BlogPost.propTypes = {
  post: postType,
};

export default BlogPost;
