import React from 'react'

export const Description = ({data, filterData, type}) => {
    if (!data) {
        return null
    }
    let id = data.url.split('/')
    id = id[id.length - 2]

    return(
        <div className="row">
            <div className="card mb-3 col-lg-7">
                    <h3 className="card-header">{data.name}</h3>
                    <img style={{height: '30rem', width: '100%', display: 'block'}}
                         src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
                         alt="img" />
                <div className="card-body">
                </div>
            </div>
            <div className="col-lg-5">
                <ul className="list-group list-group-flush">
                    {filterData.map((key, index) =>
                        <li className="list-group-item" key={index}>
                            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}</strong>: {data[key]}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
