import React from "react"
import { FaTrashAlt } from "react-icons/fa";

const LineItems = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className='item' key={item.id}>
            <input
                type='checkbox'
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
            />
            <label>{item.item}</label>
            <FaTrashAlt
                role='button'
                onClick={() => handleDelete(item.id)}
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
            />
        </li>
    )
}

export default LineItems