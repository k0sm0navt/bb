import {Router} from 'backbone';
import CarsView from '../views/cars.view';
import AboutView from '../views/about.view';
import CarView from '../views/car.view';

const MainRouter = Router.extend({
    routes: {
        '': 'allCars',
        'allCars': "allCars",
        'about': 'about'
    },

    allCars: () => new CarsView({el: '#main-container'}),
    about: () => new AboutView({el: '#main-container'}),

    // addCar: () => new CarView(),
    // editCar: (id) => new CarView({id : id})
});

export default MainRouter
