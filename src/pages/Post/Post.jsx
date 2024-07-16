import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';

import BlogPost from '~/containers/BlogPost';

import Separator from '~/components/Separator';

import { postsType } from '~/types';

function Post(props) {
  const { posts } = props;
  const { slug } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPost(posts.find((p) => p.slug === slug));
  }, [posts, slug]);

  return (
    <Box component="main">
      {post ? <BlogPost post={post} /> : <Box />}

      <Separator extraSpace />
    </Box>
  );
}

Post.propTypes = { posts: postsType };

export default Post;
