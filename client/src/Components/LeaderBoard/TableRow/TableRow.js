import React from "react"
import PropTypes from "prop-types"

import "./TableRow.scss"

const TableRow = (props) => {
  const { alltime, img, recent, username } = props.rowData
  const fccURL = `http://www.freecodecamp.com/${username}`

  return (
    <tr>
      <td>{props.id}</td>
      <td align='left'>
        <a href={fccURL} target='_blank'>
          <img className='camper-image' src={img} alt='no img'></img>
          <span className='camper-name'>{username}</span>
        </a>
      </td>
      <td>{recent}</td>
      <td>{alltime}</td>
    </tr>
  )
}

TableRow.propTypes = {
  id: PropTypes.number,
  rowData: PropTypes.object,
}

export default TableRow
