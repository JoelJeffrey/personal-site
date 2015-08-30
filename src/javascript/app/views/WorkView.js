var Marionette = require('backbone.marionette');
var BaseView = require('./BaseView');
var template = require('templates/work.hbs');

module.exports = Marionette.ItemView.extend({

    className: 'section section-work',

    template: template,

    ui: {},

    events: {},

    initialize: function () {
    	
    },

    onBeforeRender: function () {},

    onRender: function () {},

    onShow: function () {},

    onBeforeDestroy: function () {},

    onDestroy: function () {}

});