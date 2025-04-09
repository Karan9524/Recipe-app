import React from 'react'
import '../StyleSheet/footer.css'

const MealFooter = () => {
    return (
        <>
            <div className='footer-container'>
                <div className='built'>
                    <h6>@ 2025 Recipe App</h6>
                    <div className='ind'>
                        <h6>Proudly built in the INDIA</h6>
                        <img src='images/india.png' />
                    </div>
                </div>

                <div className='social'>
                    <h6>Socials</h6>
                    <div className='social-icon'>
                        <i class="fa-brands fa-square-facebook"></i>
                        <i class="fa-brands fa-square-twitter"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                    </div>
                </div>

                <div className='details'>
                    <a href='/MealAbout' className='about'>About</a>
                    <a href='/MealContact' className='contact'>Contact</a>
                </div>
            </div>
        </>
    )
}

export default MealFooter