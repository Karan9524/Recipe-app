import React from 'react'
import '../StyleSheet/mealContact.css'
import MealHeader from './MealHeader'
import MealFooter from './MealFooter'

const MealContact = () => {
  return (
    <>
        <div>
            <MealHeader/>
        </div>
        
        <div className='contact-container'>
            <h1>Contact</h1>
            <div className='cont-email'>
                <h3>Email</h3>
                <p>recipeapp@gmail.com</p>
            </div>
            <div className='cont-chat'>
                <h3>Chat</h3>
                <p>Discord Chat Invite</p>
            </div>
            <h2>Related sites</h2>
            <div className='cont-img'>
                <img src='/images/contact1.png'/>
                <p>Free Music API Database</p>
            </div>
            <div className='cont-img'>
                <img src='/images/contact2.png'/>
                <p>Free Sports API Database</p>
            </div>
            <div className='cont-img2'>
                <img src='/images/contact3.png'/>
                <p>Free Recipe API Database</p>
            </div>
        </div>

        <div className='contact-footer'>
            <MealFooter/>
        </div>
    </>
  )
}

export default MealContact