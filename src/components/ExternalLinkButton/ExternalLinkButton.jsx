import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';

function ExternalLinkButton(props) {
  const { link, text } = props;

  return (
    <Button
      component={Link}
      to={link}
      target="_blank"
      rel="noreferrer"
      referrerPolicy="no-referrer"
      variant="outlined"
      color="secondary"
      sx={{ width: '100%', borderRadius: '2px' }}
    >
      {text}
    </Button>
  );
}

ExternalLinkButton.defaultProps = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ExternalLinkButton;
