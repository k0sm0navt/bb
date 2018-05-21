import {history, View} from 'backbone';
import CarView from 'views/car.view';
import BaseModalView from 'views/modal.view';
import {CarCollection} from '../model/car.collection';
import dust from 'dust.core';
import dusthelpers from 'dust-helpers';
import template from 'templates/car.collection';
import {CarModel} from "../model/car.model";
import _ from 'underscore';


const CarsView = View.extend({
        events: {
            'click .addCar': 'addCar',
            'change #searchQuery': 'searchByQuery',
        },

        initialize: function (models, options) {
            this.options = options;
            this.cars = new CarCollection({}, this.options);
            this.render();
            this.listenTo(this.cars, 'changing', this.render);
        },

        render: function () {
            this.cars.fetch({async: false});
            this.subViews && this.onLeave();
            this.cars.page.pages = _.range(this.cars.page.totalPages);
            this.subViews = this.subViews || [];
            dust.render(template, this.cars.page, (err, out) => this.$el.html(out));
            this.cars.each(car => this.appendCar(car));
            $('#main-container').append(this.el);
        },

        appendCar: function (car) {
            let view = new CarView({model: car}, {cars: this.cars});
            this.subViews.push(view);
            this.$el.children('#table').append(view.render())
        },

        addCar: function () {
            let modalView = new BaseModalView(new CarModel());
            modalView.show(this.cars);
        },

        onLeave: function () {
            this.subViews.forEach(view => view.remove())
        },

        searchByQuery: function () {
            this.options.searchQuery = $('#searchQuery').val();
            this.options.currentPage = 0;
            history.navigate('#');
            this.render();
        }
    })
;
export default CarsView;


