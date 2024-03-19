import PropTypes from 'prop-types';
import MuiIconButton from '@mui/material/IconButton';

const buttonStyles = {
  border: '1px solid',
  borderRadius: '2px',
  display: { sm: 'none' },
  padding: '8px',
};

function IconButton(props) {
  const { children, handleClick } = props;

  return (
    <MuiIconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleClick} sx={buttonStyles}>
      {children}
    </MuiIconButton>
  );
}

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default IconButton;
