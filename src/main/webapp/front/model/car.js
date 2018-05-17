import {Model} from 'backbone';

export class CarModel extends Model {
    constructor(attrs, options) {
        super(attrs, options);
        this.urlRoot = '/cars';
    }

}