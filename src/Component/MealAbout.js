import React from 'react'
import '../mealAbout.css'
import MealHeader from './MealHeader'
import MealFooter from './MealFooter'

const MealAbout = () => {
    return (
        <>
            <div>
                <MealHeader />
            </div>
            <div className='about-container'>
                <div className='up-about'>
                    <h1>About</h1>
                    <p>The Recipe App was built in 2016 to provide a free data source api for recipes online
                        in the hope that developers would build applications and cool projects ontop of it.
                        The Recipe App originated on the Kodi forums as a way to browse recpies on your TV.</p>
                </div>
                <div className='down-about'>
                    <h3>Kodi Recipe Add-on</h3>
                    <img  src='images/about.png' />
                </div>
            </div>
            <div className='about-footer'>
                <MealFooter />
            </div>
        </>
    )
}

export default MealAbout