import React from 'react'
import './List.css'

export const List = ({data, getItem}) => {
    return(
        <ul className="list-group ">
            {data.map((element, index) =>
                <li
                    className='list-group-item d-flex justify-content-between align-items-center list'
                    key={index}
                    onClick={() => getItem(index + 1)}
                >
                    {element.name}
                    <span className="badge badge-primary badge-pill">{index + 1}</span>
                </li>
            )}
        </ul>
    )
}
