import {Router} from 'backbone';
import CarsView from '../views/cars.view';
import CarView from '../views/car.view';

const MainRouter = Router.extend({
    routes: {
        "": "allCars",
        "allCars": "allCars",
        "addCar": "addCar",
        "editCar/:id": "editCar",
        "deleteCar/:id": "deleteCar",
    },

    allCars: () => new CarsView({el : '#cars'}),
    // addCar: () => new CarView(),
    // editCar: (id) => new CarView({id : id})
});

export default MainRouter
