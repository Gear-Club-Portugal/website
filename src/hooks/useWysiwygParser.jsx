import parse, { domToReact } from 'html-react-parser';

import Typography from '@mui/material/Typography';

const useWysiwygParser = (htmlString, variantMapping = {}) => {
  const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const options = {
    replace: ({ name, children }) => {
      if (headingTags.includes(name)) {
        return (
          <Typography component={name} variant={variantMapping[name] ?? name}>
            {domToReact(children, options)}
          </Typography>
        );
      }
      if (name === 'p') {
        return (
          <Typography
            component="p"
            variant={variantMapping.body1 ?? 'body1'}
            sx={children.length === 0 && { mb: '24px' }}
          >
            {domToReact(children, options)}
          </Typography>
        );
      }
    },
  };

  return <>{parse(htmlString, options)}</>;
};

export default useWysiwygParser;
