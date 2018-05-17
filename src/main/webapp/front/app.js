import Router from './router/router';
import Backbone from 'backbone';

export default () => {
    new Router();
    Backbone.history.start();
};
