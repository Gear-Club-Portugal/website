import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PaginationItem from '@mui/material/PaginationItem';

import { StyledPagination } from './styled';

function Pagination(props) {
  const { count, page } = props;

  return (
    <StyledPagination
      count={count}
      page={page}
      shape="rounded"
      renderItem={(item) => (
        <PaginationItem component={Link} to={`${item.page === 1 ? '' : `?page=${item.page}`}`} {...item} />
      )}
    />
  );
}

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
};

export default Pagination;
