import React from 'react'
import PropTypes from 'prop-types'

import More from '../assets/images/play-icon.png'
import Plus from '../assets/images/plus-icon.png'


const Carouselitem= ({ cover,title,year,contentRating,duration}) =>{
    return (
        <React.Fragment>
            <div className="carousel-item">
                <img className="carousel-item__img" src={cover} alt={title} />
                <div className="carousel-item__details">
                <div>
                    <img className="carousel-item__details--img" src={More} alt="Play Icon" /> 
                    <img className="carousel-item__details--img" src={Plus} alt="Plus Icon" /> 
                </div>
                    <p className="carousel-item__details--title">{title}</p>
                    <p className="carousel-item__details--subtitle">{`${year} 
                    ${contentRating}
                     ${duration}`}</p>


                </div>
            </div>

        </React.Fragment>
    )
}
Carouselitem.propTypes ={
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,

    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,


}

export default Carouselitem
