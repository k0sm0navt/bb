import {View} from 'backbone';
import CarView from 'views/car.view';
import BaseModalView from 'views/modal.view';
import {CarCollection} from '../model/car.collection';
import dust from 'dust.core';
import template from 'templates/car.collection';

const CarsView = View.extend({

    events: {
        'click .addCar': 'addCar'
    },
    initialize: function () {
        dust.render(template, {}, (err, out) => this.$el.html(out));
        this.cars = new CarCollection();
        this.cars.fetch({async: false});
        this.render();
        this.listenTo(this.cars, 'all', this.rerender);
    },

    render: function () {
        this.cars.each(car => {
            let view = new CarView({model: car});
            this.$el.append(view.render())
        })
    },

    addCar: function () {
        const modalView = new BaseModalView();
        modalView.show();
    }
});
export default CarsView;


