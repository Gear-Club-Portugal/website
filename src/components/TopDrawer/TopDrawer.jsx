import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';

const drawerStyles = {
  display: { xs: 'block', sm: 'none' },
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: '100%',
    top: '80px',
  },
};

function TopDrawer(props) {
  const { children, handleOnClose, open, window } = props;
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Drawer
      container={container}
      anchor="top"
      variant="temporary"
      open={open}
      onClose={handleOnClose}
      ModalProps={{ keepMounted: true }} // Better open performance on mobile.
      sx={drawerStyles}
    >
      {children}
    </Drawer>
  );
}

TopDrawer.propTypes = {
  children: PropTypes.node.isRequired,
  handleOnClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  window: PropTypes.func,
};

export default TopDrawer;
