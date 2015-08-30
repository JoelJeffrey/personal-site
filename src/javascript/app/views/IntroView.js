var Marionette = require('backbone.marionette');
var BaseView = require('./BaseView');
var template = require('templates/intro.hbs');

module.exports = Marionette.ItemView.extend({

    className: 'section section-intro',

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