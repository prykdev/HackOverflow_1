import React from 'react';
import PropTypes from 'prop-types';


const ToSortHeader = (props) => {
  const handleClick = () => {
    props.onClick(props.sortBy)
  }

  return (
    <th scope="col">{props.heading}<i onClick={handleClick} className="fa fa-fw fa-sort"></i></th>
  )
}

ToSortHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
  sortBy: PropTypes.string,
  header: PropTypes.string,
};

export default ToSortHeader;