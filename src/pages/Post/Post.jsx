import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Separator from '~/components/Separator';

import { fontWeight } from '~/theme.js';

function Post(props) {
  const { posts } = props;
  const { slug } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
    setPost(posts.find((p) => p.slug === slug));
  }, [posts, slug]);

  return (
    <Box component="main" sx={{ mt: '32px' }}>
      {post ? (
        <Box component="article">
          <Box sx={{ width: '358px', height: '250px' }}>
            <Box
              component="img"
              src={post.mainImage.url}
              alt={post.mainImage.fileName}
              sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>

          <Box>
            <Typography variant="h3" sx={{ my: '16px' }}>
              {post.title}
            </Typography>

            <Box sx={{ my: '8px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Box sx={{ width: '32px', height: '32px' }}>
                <Box
                  component="img"
                  src={post.author.avatar.url}
                  alt={post.author.avatar.fileName}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>

              <Box sx={{ flexGrow: 1, mx: '10px' }}>
                <Typography variant="body2">{post.author.name}</Typography>
                <Typography
                  sx={{ fontSize: { xs: '8px' }, fontWeight: { xs: fontWeight.regular }, lineHeight: { xs: 'normal' } }}
                >
                  {post.publishedAt}
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="body2"
                  sx={{ py: '8px', px: '10px', backgroundColor: '#00000080', color: '#ffffff' }}
                >
                  {post.category}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.body) }} />
        </Box>
      ) : (
        <Box />
      )}

      <Separator extraSpace />
    </Box>
  );
}

Post.propTypes = {
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
};

export default Post;
