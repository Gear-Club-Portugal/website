import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const itemButtonStyles = { textAlign: 'left' };

function LanguageSwitcher(props) {
  const { handleClose } = props;

  const path = window.document.location.pathname;
  const lang = path.split('/')[1];
  const regex = new RegExp(`^/${lang}`);

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton component={Link} to={path.replace(regex, '/en')} onClick={handleClose} sx={itemButtonStyles}>
          <ListItemText primary="English Version" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component={Link} to={path.replace(regex, '/pt')} onClick={handleClose} sx={itemButtonStyles}>
          <ListItemText primary="Versão em Português" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

LanguageSwitcher.propTypes = {
  handleClose: PropTypes.func,
};

export default LanguageSwitcher;
