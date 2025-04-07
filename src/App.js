import './App.css';
import Mainpage from './Component/Mainpage';
import { Route, Routes } from 'react-router-dom';
import MealInfo from './Component/MealInfo';
import MealApi from './Component/MealApi';
import MealAbout from './Component/MealAbout';
import MealContact from './Component/MealContact';
import Bheemass from './Component/Bheemass';
import Vels from './Component/Vels';
import Spicehut from './Component/Spicehut';
import Krishna from './Component/Krishna';
import Vasanth from './Component/Vasanth';
import Saravana from './Component/Saravana';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Mainpage />}/>
      <Route path='/Bheemass' element={<Bheemass />}/>
      <Route path='/Vels' element={<Vels />}/>
      <Route path='/Spicehut' element={<Spicehut/>}/>
      <Route path='/Krishna' element={<Krishna />} />
      <Route path='/Vasanth' element={<Vasanth />} />
      <Route path='/Saravana' element={<Saravana />} />
      <Route path='/:mealid' element={<MealInfo/>}/>
      <Route path='/MealApi' element={<MealApi />}/>
      <Route path='/MealAbout' element={<MealAbout />} />
      <Route path='/MealContact' element={<MealContact/>}/>      
    </Routes>
  );
}

export default App;