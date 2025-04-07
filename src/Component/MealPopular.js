import React from 'react'
import '../mealPopular.css'

const MealPopular = () => {
    return (
        <>
            <h1 className='pop-head'>Popular Ingredients</h1>
            <div className='popular-container'>
                <div className='popular-item'>
                    <img src='/images/popular1.png' />
                    <p>Beef</p>
                </div>
                <div className='popular-item'>
                    <img src='/images/popular2.png' />
                    <p>Pork</p>
                </div>
                <div className='popular-item'>
                    <img src='/images/popular3.png' />
                    <p>Chicken</p>
                </div>
                <div className='popular-item'>
                    <img src='/images/popular4.png' />
                    <p>Salmon</p>
                </div>
            </div>
        </>
    )
}

export default MealPopular