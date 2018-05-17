import {View} from 'backbone';
import dust from 'dust.core';
import template from 'templates/add.modal';

var BaseModalView = View.extend({

    id: 'base-modal',
    className: 'modal fade',
    template: 'modals/BaseModal',

    events: {
        'hidden': 'teardown'
    },

    initialize: function() {
        _.bindAll(this, 'show', 'teardown', 'render', 'renderView');
        this.render();
    },

    show: function() {
        this.$el.modal('show');
    },

    teardown: function() {
        this.$el.data('modal', null);
        this.remove();
    },

    render: function() {
        dust.render(template, {}, (err, out) => this.$el.html(out));
        return this;
    },

    renderView: function(template) {
        this.$el.html(template());
        this.$el.modal({show:false}); // dont show modal on instantiation
    }
});

export default BaseModalView;