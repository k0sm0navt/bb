import {history, Router} from 'backbone';
import CarsView from '../views/cars.view';
import AboutView from '../views/about.view';
import ContactView from '../views/contact.view';
import Application from '../app';

const MainRouter = Router.extend({
    routes: {
        '': 'allCars',
        'allCars': "allCars",
        'allCars/page/:page': "allCars",
        'about': 'about',
        'contact': 'contact'
    },

    initialize: function () {
        Application.router = this;
        history.start()
    },

    allCars: function (page = 0) {
        this.updateActiveLinks('home');
        this.clearView(Application.currentView);
        let searchQuery = Application.currentView && Application.currentView.options && Application.currentView.options.searchQuery;
        Application.currentView = new CarsView({}, {
            currentPage: page || 0,
            size: 6,
            searchQuery: searchQuery
        });
    },
    about: function () {
        this.updateActiveLinks('about');
        this.clearView(Application.currentView);
        Application.currentView = new AboutView();
    },

    contact: function () {
        this.updateActiveLinks('contact');
        this.clearView(Application.currentView);
        Application.currentView = new ContactView();
    },

    updateActiveLinks: function (activeLink) {
        $('#navbar li').removeClass('active');
        $('#' + activeLink).addClass('active');
    },

    clearView: function (currentView) {
        if (currentView) {
            currentView.leave();
        }
    }
});

export default MainRouter
