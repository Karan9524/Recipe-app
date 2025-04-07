import React, { useEffect, useState } from 'react'
// import MealCards from './MealCards';
import CategoryList from './CategoryList';
import MealHeader from './MealHeader';
import MealFooter from './MealFooter';
import SpecialMeal from './SpecialMeal';
// import MealPopular from './MealPopular';

const Spicehut = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian')
        .then(res => res.json())
        .then(res => setProducts(res.meals))
    },[]);

    // const [data, setData] = useState();
    // const [search, setSearch] = useState();

    // const handleInput = (event) => {
    //     setSearch(event.target.value);
    // }

    // const myFun = async () => {
    //     const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    //     const jsonData = await get.json();
    //     // console.log(jsonData.meals);
    //     setData(jsonData.meals);
    // }
    // // console.log(data);

    return (
        <>
            <div>
                <MealHeader/>
            </div>
            <div className='hotel-full-container'>
                <img src='images/hotel3.avif' />

                {/* <div className='container'>
                    <div className='searchBar'>
                        <input type='text' placeholder='Search for a meal...' onChange={handleInput} />
                        <button onClick={myFun}><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div> */}
                
            </div>
            <div className='total-meals'>
                <div className='up-total-meals1'>
                    <img src='images/total-meal.png' /><p>Total Meals: <span>12</span></p>
                </div>
                <div className='up-total-meals2'>
                    <img src='images/total-ing.png' /><p>Total Ingredients: <span>12</span></p>
                </div>
                <div className='up-total-meals3'>
                    <img src='images/total-image.png' /><p>Images: <span>12</span></p>
                </div>
            </div>

            <hr className='hr' />

            {/* <div>
                <MealCards detail={data} />
            </div> */}

            <div>
                <CategoryList detail={products} />             
            </div>


            <hr className='hr2'/>

            {/* <div>
                <MealPopular/>
            </div>

            <hr className='hr3'/> */}

            <div>
                <SpecialMeal/>
            </div>
            <div>
                <MealFooter/>
            </div>
        </>
    );
}


export default Spicehut;