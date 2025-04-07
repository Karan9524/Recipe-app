import React from 'react'
import { NavLink } from 'react-router-dom';

const CategoryList = ({ detail }) => {
  return (
    <>
      <div className='lat-meals'>
        <h1 className='pop-head'>Latest Meals</h1>
      </div>
      <div className='meals'>
        {!detail ? "" : detail.map((curItem) => {
          return (
            <div className='mealImg'>
              <img src={curItem.strMealThumb} />
              <p>{curItem.strMeal}</p>
              <NavLink to={`/${curItem.idMeal}`}>
                <button >Recipe</button>
              </NavLink>
            </div>
          )
        })
        }
      </div>
    </>
  )
}


export default CategoryList