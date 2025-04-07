import React, { useEffect, useState } from 'react'
import CategoryList from './CategoryList';
import MealHeader from './MealHeader';
import MealFooter from './MealFooter';
import SpecialMeal from './SpecialMeal';

const Spicehut = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Veg')
            .then(res => res.json())
            .then(res => setProducts(res.meals))
    }, []);


    return (
        <>
            <div>
                <MealHeader />
            </div>
            <div className='hotel-full-container'>
               <img src='images/hotel5.jpg' />
            </div>
            <div className='total-meals'>
                <div className='up-total-meals1'>
                    <img src='images/total-meal.png' /><p>Total Meals: <span>5</span></p>
                </div>
                <div className='up-total-meals2'>
                    <img src='images/total-ing.png' /><p>Total Ingredients: <span>5</span></p>
                </div>
                <div className='up-total-meals3'>
                    <img src='images/total-image.png' /><p>Images: <span>5</span></p>
                </div>
            </div>

            <hr className='hr' />

            <div>
                <CategoryList detail={products} />
            </div>

            <hr className='hr2' />

            <div>
                <SpecialMeal />
            </div>
            <div>
                <MealFooter />
            </div>
        </>
    );
}


export default Spicehut;