import {Model} from 'backbone';

export class CarModel extends Model {
    constructor(attrs, options) {
        super(attrs, options);
        this.urlRoot = '/cars';

        this.validation = {
            brand: {
                required: true,
                msg: 'Please enter a Brand'
            },
            model: {
                required: true,
                msg: 'Please enter a Model'
            },
            price: {
                range: [0, 20000],
                msg: 'Price is too big'

            },
            manufactureYear: {
                range: [1960, 2020],
                msg: 'Too old'
            }
        }
    }
}