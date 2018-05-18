import {View} from 'backbone';
import dust from 'dust.core';
import template from 'templates/about.page';


const AboutView = View.extend({
    initialize: function () {
        this.render();
    },
    render: function () {
        dust.render(template, {}, (err, out) => this.$el.html(out));
    }
});

export default AboutView;