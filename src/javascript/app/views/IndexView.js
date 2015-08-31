var Marionette = require('backbone.marionette');
var BaseView = require('./BaseView');
var template = require('templates/index.hbs');
var IntroView = require('views/IntroView');
var AboutView = require('views/AboutView');
var SkillsView = require('views/SkillsView');
var WorkView = require('views/WorkView');
var ContactView = require('views/ContactView');

module.exports = Marionette.LayoutView.extend({

    className: 'page page-index',

    template: template,

    regions: {
        regionIntro: '#region-intro',
        regionAbout: '#region-about',
        regionSkills: '#region-skills',
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

        // Show About View
        this.aboutView = new AboutView();
        this.regionAbout.show(this.aboutView);

        // Show Skills View
        this.skillsView = new SkillsView();
        this.regionSkills.show(this.skillsView);

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