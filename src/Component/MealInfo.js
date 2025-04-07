import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import MealHeader from './MealHeader';
import MealFooter from './MealFooter';


const MealInfo = () => {

  const { mealid } = useParams();
  const [info, setInfo] = useState();
  // console.log(mealid);

  const getInfo = async () => {
    const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
    const jsonData = await get.json();
    setInfo(jsonData.meals[0]);
  }
  if (info != "") {
    getInfo();
  }

  return (
    <div>
      {!info ? "Data Not Found" :
        <>
          <div className='info-head'>
            <MealHeader />
          </div>
          <div className='mealInfo'>
            <img src={info.strMealThumb} />
            <div className='info'>
              <h1>Recipe Details</h1>
              <button>{info.strMeal}</button>
              <h3>Intruction's</h3>
              <p>Finely slice a quarter of the chilli, then put the rest in a food processor with the ginger,
                garlic, coriander stalks and one-third of the leaves. Whizz to a rough paste with a splash of
                water if needed. Heat the oil in a frying pan, then quickly brown the chicken chunks for 1
                min. Stir in the paste for another min, then add the peanut butter, stock and yogurt. When
                the sauce is gently bubbling, cook for 10 mins until the chicken is just cooked through and
                sauce thickened. Stir in most of the remaining coriander, then scatter the rest on top with
                the chilli, if using. Eat with rice or mashed sweet potato.</p>

                <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4">Order</button>
            </div>
          </div>
          <div className='info-foot'>
            <MealFooter />
          </div>
        </>
      }
    </div>
  )
}

export default MealInfo