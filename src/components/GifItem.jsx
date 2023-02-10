import React from 'react'
import '../styles.css'

export const GifItem = ({ url, id, title }) => {

    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
