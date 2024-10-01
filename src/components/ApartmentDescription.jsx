import React from 'react'
import "./ApartmentDescription.scss"

export function ApartmentDescription() {
    return (
        <div className="apartment_description">
            <p className='description_header'>
                <span>Description</span>
                <i class="fa-solid fa-chevron-down"></i>
            </p>
            <p className='description_content'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem magni at veniam dolorum, similique hic, expedita maiores ea ipsa aliquam odio vel in corporis et ipsum quae tenetur rem reprehenderit distinctio.
                Culpa earum sed eaque quasi? Iure, suscipit eius in vero illo nemo minus ex? Vel ducimus placeat at ullam.
            </p>
        </div>
    )
}

