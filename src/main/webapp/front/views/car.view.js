import {View} from 'backbone';
import dust from 'dust.core';
import template from 'templates/car.model';


const CarView = View.extend({
    events: {
        'click .deleteCar': 'deleteCar'
    },

    initialize: function () {
        this.listenTo(this.model, 'destroy', this.remove);
    },
    // this.listenTo(this.model, 'change', this.render);

render: function () {
    this.model.carPict = this.model.carPict || 'pict/no-photo.jpg';
    dust.render(template, this.model.toJSON(), (err, out) => this.$el.html(out));
        return this.$el;
    },

    deleteCar: function () {
        this.model.destroy()
    }

});

export default CarView;