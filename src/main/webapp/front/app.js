import Router from 'router/router';
import Backbone from 'backbone';
import _ from 'underscore';

class Application {
  constructor() {
    this.router = new Router;
  }
}

export default (new Application);

_.extend(Backbone.Validation.callbacks, {
  valid: function (view, attr, selector) {
    let $el = view.$('[name=' + attr + ']'),
      $group = $el.closest('.form-group');

    $group.removeClass('has-error');
    $group.find('.help-block').html('').addClass('hidden');
  },
  invalid: function (view, attr, error, selector) {
    let $el = view.$('[name=' + attr + ']'),
      $group = $el.closest('.form-group');

    $group.addClass('has-error');
    $group.find('.help-block').html(error).removeClass('hidden');
  }
});

Backbone.View.prototype.leave = function () {
  this.remove();
  this.onLeave && this.onLeave();
};
