import {View} from 'backbone';
import dust from 'dust.core';
import template from 'templates/car';


const CarView = View.extend( {
    initialize: function () {
        // this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
    },

    render: function() {
        dust.render(template, this.model.toJSON(), (err, out) => this.$el.html(out));
        return this.$el;
    },

    events: {
        'click .deleteCar': 'deleteCar'
    },

    deleteCar: function() {this.model.destroy()}

});

export default CarView;