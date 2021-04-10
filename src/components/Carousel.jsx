import React from 'react'

const Carousel= (props) => {
    return (
        <div>
            <section className="carousel">
                <div className="carousel__container">
                {props.children}
                </div>
        </section>
   
        </div>
    )
}

export default Carousel
