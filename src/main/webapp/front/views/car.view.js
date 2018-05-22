import {View} from 'backbone';
import dust from 'dust.core';
import template from 'templates/car.model';
import BaseModalView from "../../dist/views/modal.view";


const CarView = View.extend({
    events: {
        'click .deleteCar': 'deleteCar',
        'click .editCar': 'editCar'
    },

    initialize: function (model, options) {
        this.options = options;
        this.listenTo(this.model, 'destroy', this.remove);
        this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
        this.model.carPict = this.model.carPict || 'pict/no-photo.jpg';
        dust.render(template, this.model.toJSON(), (err, out) => this.$el.html(out));
        return this.$el;
    },

    deleteCar: function () {
      this.model.destroy().done(()=> this.options.cars.trigger('changing'));
    },

    editCar: function () {
        let modalView = new BaseModalView(this.model);
        modalView.show(this.cars);
    }

});

export default CarView;