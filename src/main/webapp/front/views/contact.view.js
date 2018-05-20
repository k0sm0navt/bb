import {View} from 'backbone';
import dust from 'dust.core';
import template from 'templates/contact.page';


const ContactView = View.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        dust.render(template, {}, (err, out) => this.$el.html(out));
        $('#main-container').append(this.el);
    }
});

export default ContactView;