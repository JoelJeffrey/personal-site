var BaseView = require('./BaseView');
var template = require('templates/header.hbs');

module.exports = BaseView.extend({

    template: template,

    ui: {},

    events: {},

    initialize: function () {},

    onBeforeRender: function () {},

    onRender: function () {},

    onShow: function () {},

    onBeforeDestroy: function () {},

    onDestroy: function () {}

});