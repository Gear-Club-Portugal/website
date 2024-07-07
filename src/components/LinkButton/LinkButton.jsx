import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';

function LinkButton(props) {
  const { link, text, external } = props;

  return (
    <Button
      component={Link}
      to={link}
      target={external ? '_blank' : ''}
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

LinkButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  external: PropTypes.bool,
};

LinkButton.defaultProps = {
  external: false,
};

export default LinkButton;
