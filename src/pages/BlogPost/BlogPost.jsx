import { useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';

import BlogPostContainer from '~/containers/BlogPost';

import Separator from '~/components/Separator';

import { postsType } from '~/types';

function BlogPost(props) {
  const { posts } = props;
  const { slug } = useParams();
  const post = useMemo(() => posts.find((p) => p.slug === slug), [posts, slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <Box component="main">
      {post ? <BlogPostContainer post={post} /> : <Box />}

      <Separator extraSpace />
    </Box>
  );
}

BlogPost.propTypes = { posts: postsType };

export default BlogPost;
