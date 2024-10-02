import React from 'react'
import "./ImageBanner.scss"

export function ImageBanner(props) {
    return (
        <div className='apart-banner'>
            <img src={props.imageUrl} alt='Photos appartements' />
        </div>
    )
}
