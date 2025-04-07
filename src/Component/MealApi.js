import React from 'react'
import MealFooter from './MealFooter'
import MealHeader from './MealHeader'
import '../mealApi.css'

const MealApi = () => {
  return (
    <>
      <div>
        <MealHeader/>
      </div>

      <div className='api-container'>
        <h1>Recipe App API</h1>
        <div className='api-con1'>
          <div className='support'>
            <img src='images/api1.png' />
            <h6>Free Recipe API Support</h6>
          </div>
          <p>The API and site will always remain free at point of access</p>
        </div>
        <div className='api-con2'>
          <div className='keys'>
            <img src='images/api2.png' />
            <h6>Test API Keys</h6>
          </div>
          <p>You can use the test API key "1" during development of your app or for educational use (see test links below).
            However you must become a supporter if releasing publicly on an appstore.</p>
        </div>
        <div className='api-con3'>
          <div className='upgrade'>
            <img src='images/api3.png' />
            <h6> API Production Key Upgrade</h6>
          </div>
          <p>All supporters have access to the beta version of the API which allows mutiple ingredient filters.
            You also get access to adding your own meals and images. You can also list the full database rather than limited to 100 items.
            Please sign up on Paypal and we will email you the upgraded API key.</p>
        </div>
        <div className='api-con4'>
          <div className='api-contact'>
            <img src='images/api4.png' />
            <h6>Contact</h6>
          </div>
          <p>Email: recipeapp@gmail.com</p>
        </div>

        <hr />

        <h1>V1 API</h1>
        <p className='link'>API Methods using the developer test key '1' in the URL</p>
        <div className='link1'>
          <h3>Search meal by name</h3>
          <a href='#'>www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata</a>
        </div>
        <div className='link2'>
          <h3>List all meals by first letter</h3>
          <a href='#'>www.themealdb.com/api/json/v1/1/search.php?f=a</a>
        </div>
        <div className='link3'>
          <h3>Lookup full meal details by id</h3>
          <a href='#'>www.themealdb.com/api/json/v1/1/lookup.php?i=52772</a>
        </div>
        <div className='link4'>
          <h3>Lookup a single random meal</h3>
          <a href='#'>www.themealdb.com/api/json/v1/1/random.php</a>
        </div>
      </div>

      <div>
        <MealFooter/>
      </div>
    </>
  )
}

export default MealApi