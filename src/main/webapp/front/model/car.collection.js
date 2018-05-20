import {Collection} from 'backbone';
import {CarModel} from './car.model';

export class CarCollection extends Collection {

    constructor(models, options) {
        super(models, options);
        this.model = CarModel;
        let baseUrl = 'cars';
        let paramQuery = 'size=' + options.size + '&page=' + options.currentPage;
        if (options.searchQuery) {
            baseUrl += '/search/findByBrandContainingIgnoreCaseOrModelContainingIgnoreCase';
            paramQuery += '&brand=' + options.searchQuery + '&model=' + options.searchQuery;
        }
        this.url = baseUrl + '?' + paramQuery;
        this.parse = (response) => {
            this.page = response.page;
            this.page.searchQuery = options.searchQuery;
            return response._embedded.cars;
        }
    }

}