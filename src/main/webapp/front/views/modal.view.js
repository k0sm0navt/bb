import {View} from 'backbone';
import Validation from 'backbone-validation';
import dust from 'dust.core';
import template from 'templates/add.modal';

const BaseModalView = View.extend({

    id: 'base-modal',
    className: 'modal fade',
    template: 'modals/BaseModal',

    events: {
        'click .saveCar': 'saveCar',
        'click .closeModal': 'close',
        'hidden.bs.modal': 'remove'
    },

    initialize: function (model) {
        this.model = model;
        Validation.bind(this);
        this.render();
    },

    show: function (cars) {
        this.cars = cars;
        this.$el.modal('show');
    },

    render: function () {
        dust.render(template, this.model.toJSON(), (err, out) => this.$el.html(out));
        $('#addModal').append(this.el);

    },

    saveCar: function (event) {
        event.preventDefault();
        this.$('input').each((i, input) => this.model.set(input.name, input.value));
        if (this.model.isValid(true)) {
            this.model.save().done(() => this.cars && this.cars.trigger('changing'));
            this.$el.modal('toggle');
        }
    }
});

export default BaseModalView;