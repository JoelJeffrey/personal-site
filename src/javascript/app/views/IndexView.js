var Marionette = require('backbone.marionette');
var BaseView = require('./BaseView');
var template = require('templates/index.hbs');
var IntroView = require('views/IntroView');
var WorkView = require('views/WorkView');
var ContactView = require('views/ContactView');

module.exports = Marionette.LayoutView.extend({

    className: 'page page-index',

    template: template,

    regions: {
        regionIntro: '#region-intro',
        regionWork: '#region-work',
        regionContact: '#region-contact'
    },

    ui: {},

    events: {},

    initialize: function () {

    },

    onBeforeRender: function () {},

    onRender: function () {
        // Show Intro View
        this.introView = new IntroView();
        this.regionIntro.show(this.introView);

        // Show Work View
        this.workView = new WorkView();
        this.regionWork.show(this.workView);

        // Show Contact View
        this.contactView = new ContactView();
        this.regionContact.show(this.contactView);
    },

    onShow: function () {},

    onBeforeDestroy: function () {},

    onDestroy: function () {}

});