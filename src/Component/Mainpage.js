import React from 'react'
import MealFooter from './MealFooter'
import '../mainpage.css'

const Mainpage = () => {
    return (
        <>
            <div className='head'>
                <div className='img'>                  
                        <img src='/images/logo.png' alt='logo' />
                        <h1>Recipe <span>App</span></h1>
                </div>
                <div className='right-content'>
                    <a href='/' className='home'>Home</a>
                    <a href='/MealApi' className='api'>API</a>
                </div>
            </div>
            <div className='full-container'>
                <h1 className='heading'>Welcome to The Recipe APP</h1>

                <div className='section'>
                    <div className='sec-con'>
                        <p>Welcome to The Recipe App: An open, crowd-sourced database of recipes from around the world.
                            We offer a <span> free recipe API </span>for anyone wanting to use it, with additional premium features if required.</p>
                    </div>
                </div>
                <div className='fav-con'>
                    <h1>What are your favorite Food ?</h1>
                    <h6>Personalize Your Experience</h6>
                    <p>Choose Your Favorite Hotel And Order Your Food...</p> 
                </div>
            </div>

            <div className='all-hotel'>
                <div className='hotel'>
                    <a href='/Bheemass'>
                        <img src='/images/hotel.avif' className='hotel-img' />
                        <h1>Bheemass Restaurant</h1>
                        <div className='rating'>
                            <p>4.1</p>
                            <img src='/images/rating4.png' />
                            <p>(3.4K) - $1-200 - Vegetarian</p>
                        </div>
                        <p>1, Bharathi Road, Cuddalore</p>
                        <p>Veg Only</p>
                    </a>
                </div>

                <div className='hotel'>
                    <a href='/Vels'>
                        <img src='/images/hotel2.avif' className='hotel-img' />
                        <h1>Hotel Vels Veg & Non Veg</h1>
                        <div className='rating'>
                            <p>3.5</p>
                            <img src='/images/rating3.5.png' />
                            <p>(922) - $$ - Vegetarian & NonVegetarian</p>
                        </div>
                        <p>No 2, Nehru Street, Cuddalore</p>
                        <p>Veg And Non Veg</p>
                    </a>
                </div>

                <div className='hotel'>
                    <a href='/Spicehut'>
                        <img src='/images/hotel3.avif' className='hotel-img' />
                        <h1>Spice Hut The Road Side Kitchen</h1>
                        <div className='rating'>
                            <p>4.5</p>
                            <img src='/images/rating4.5.png' />
                            <p>(1.9K) - $$$ - South Indian</p>
                        </div>
                        <p>83/6, NH32, Post Office Road, Cuddalore</p>
                        <p>Simple chain destination for briyanis</p>
                    </a>
                </div>

                <div className='hotel'>
                    <a href='/Krishna'>
                        <img src='/images/hotel4.avif' className='hotel-img' />
                        <h1>Hotel Sri Krishna Bhawan</h1>
                        <div className='rating'>
                            <p>3.6</p>
                            <img src='/images/rating3.5.png' />
                            <p>(3.4K) - $1-200 - Vegetarian</p>
                        </div>
                        <p>Manjakkuppam, Cuddalore</p>
                        <p>Veg Only</p>
                    </a>
                </div>

                <div className='hotel'>
                    <a href='/Vasanth'>
                        <img src='/images/hotel5.jpg' className='hotel-img' />
                        <h1>Hotel Vasantha Bhawan</h1>
                        <div className='rating'>
                            <p>4.1</p>
                            <img src='/images/rating4.png' />
                            <p>(3.4K) - $1-200 - Vegetarian</p>
                        </div>
                        <p>New Bus Stand, Cuddalore</p>
                        <p>Veg Only</p>
                    </a>
                </div>

                <div className='hotel'>
                    <a href='/Saravana'>
                        <img src='/images/hotel6.avif' className='hotel-img' />
                        <h1>Hotel Sri Saravana Bhawan</h1>
                        <div className='rating'>
                            <p>4.4</p>
                            <img src='/images/rating4.png' />
                            <p>(679) - $1-200 - Family-friendly</p>
                        </div>
                        <p>Allpettai, Manjakkuppam, Cuddalore</p>
                        <p>Veg Only</p>
                    </a>
                </div>
            </div>

            <div>
                <MealFooter />
            </div>
        </>
    )
}

export default Mainpage