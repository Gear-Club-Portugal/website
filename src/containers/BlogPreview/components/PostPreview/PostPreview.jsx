import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { postType } from '~/types';

const textFromHtml = (body) => {
  const div = document.createElement('div');
  div.innerHTML = body;

  return div.textContent || div.innerText || '';
}; // todo move to hooks

function PostPreview(props) {
  const { post } = props;

  return (
    <Card sx={{ borderRadius: 0, backgroundColor: '#ffffff', color: '#000000', height: '100%' }}>
      <CardActionArea
        component={Link}
        to={`blog/${post.slug}`}
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia component="img" height="200" image={post.mainImage.url} alt={post.mainImage.fileName} />

        <CardContent sx={{ flexGrow: 1, width: '100%' }}>
          <Typography variant="h5">{post.title}</Typography>
          <Typography sx={{ mt: '4px' }}>{textFromHtml(post.body).substring(0, 128)}...</Typography>
        </CardContent>

        <CardHeader
          avatar={<Box component="img" src={post.author.avatar.url} height="31px" />}
          action={<Box sx={{ p: '10px', backgroundColor: '#00000080', color: '#ffffff' }}>{post.category}</Box>}
          title={post.author.name}
          titleTypographyProps={{ variant: 'caption' }}
          subheader={post.publishedAt}
          sx={{ width: '100%', '.MuiCardHeader-action': { alignSelf: 'stretch', m: 0 } }}
        />
      </CardActionArea>
    </Card>
  );
}

PostPreview.propTypes = { post: postType };

export default PostPreview;
