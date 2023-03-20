import RestaurantScreen from './components/RestaurantScreen';
import IncrementByAmount from './components/IncrementByAmount';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div>
      {/* <IncrementByAmount /> */}
      {/* <RestaurantScreen /> */}
      <Provider store={store}>
        <RestaurantScreen />
      </Provider>
    </div>
  );
}

export default App;
