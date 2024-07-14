import { styled } from '@mui/system';

import Pagination from '@mui/material/Pagination';

import { theme } from '~/theme';

const StyledPagination = styled(Pagination)(() => ({
  '.MuiPaginationItem-root': {
    border: '1px solid #fff',
    borderRadius: '2px',
    padding: '8px',
    width: '64px',
    height: '38px',
  },
  '.MuiPaginationItem-root.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    border: 'none',
    '&:hover': {
      backgroundColor: `${theme.palette.primary.main}50`,
      border: 'none',
    },
  },
}));

export { StyledPagination };
