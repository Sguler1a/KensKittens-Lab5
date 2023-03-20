import {RestaurantList} from './RestaurantList';
import api from '../api';

export default function RestaurantScreen() {
  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantList loadRestaurants={api.loadRestaurants}/>
    </div>
  );
}
