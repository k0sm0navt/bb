import {Collection} from 'backbone';
import {CarModel} from './car.model';

export class CarCollection extends Collection {

    constructor(models, options) {
        super(models, options);
        this.options = options;
        this.model = CarModel;
        this.url = () =>this.getBaseUrl() + '?' + this.getParamQuery();
        this.parse = (response) => {
            this.page = response.page;
            this.page.searchQuery = this.options.searchQuery;
            return response._embedded.cars;
        };
    }

    getBaseUrl() {
        let baseUrl = 'cars';
        if (this.options.searchQuery) {
            baseUrl += '/search/findByBrandContainingIgnoreCaseOrModelContainingIgnoreCase';
        }
        return baseUrl;
    }

    getParamQuery() {
        let options = this.options;

        let paramQuery = 'size=' + options.size + '&page=' + options.currentPage;
        if (options.searchQuery) {
            paramQuery += '&brand=' + options.searchQuery + '&model=' + options.searchQuery;
        }
        return paramQuery;
    }

}