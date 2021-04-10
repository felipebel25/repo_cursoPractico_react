import React from 'react'

const Categories =(props) => {
    return (
        <div className="categories">
        <h3 className="categories__title">{props.title}</h3>
        {props.children}

            
        </div>
    )
}

export default Categories
