import {Collection} from 'backbone';
import {CarModel} from '../model/car';

export class CarCollection extends Collection {

    constructor(models, options) {
        super(models, options);
        this.model = CarModel;
        this.url = "cars";
        this.parse = (response) => response._embedded.cars;
    }



}