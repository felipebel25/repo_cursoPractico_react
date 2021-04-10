import React,{useState, useEffect}  from 'react'


import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import Carouselitem from '../components/Carouselitem'
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState'

import '../assets/styles/general.scss'

const API ='http://localhost:3000/initalState'

const App=()=> {
    
    const videos = useInitialState(API)

    console.log(videos)
        return (
            <React.Fragment>
                <Header />
                <Search />
                    {videos.mylist.length > 0 &&
                    <Categories title="Mi lista">
                        <Carousel>
                        {videos.mylist.map(item =>
                               <Carouselitem key={item.id} {...item}/>
                               
                               )}
                        </Carousel>
                </Categories>
                    }

                    {videos.trends.length === 0 ? ( 
                    <h1>cargando...</h1>) : (
                          <Categories  title="Trends">
                          <Carousel>
                              {videos.trends.map(item =>
                                     <Carouselitem key={item.id} {...item}/>
                      
                              )}
                           
                          </Carousel>
                      </Categories>
                    )}

              
            {videos.trends.length === 0 ?( <h1>cargando</h1> ):( 
                <Categories  title="Originals">
                    <Carousel>
                    {videos.originals.map(item =>
                               <Carouselitem key={item.id} {...item}/>
                
                        )}
                    
                    </Carousel>
                </Categories>
                    )}

                <Footer /> 
            </React.Fragment>
    )
}

export default App
