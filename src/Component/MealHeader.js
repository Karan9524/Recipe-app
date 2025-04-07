import React from 'react'

const MealHeader = () => {
    return (
        <>
            <div className='head'>
                <a href='/'>
                    <div className='img'>
                        <img src='/images/logo.png' alt='logo' />
                        <h1>Recipe <span>App</span></h1>
                    </div>
                </a>
                <div className='right-content'>
                    <a href='/' className='home'>Home</a>
                    <a href='/MealApi' className='api'>API</a>
                    {/* <a href='/MealApi' className='api'>Order</a> */}
                </div>
            </div>
        </>
    )
}

export default MealHeader