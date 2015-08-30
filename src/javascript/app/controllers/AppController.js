    var app = require('../app'),
        Backbone = require('backbone'),
        Marionette = require('backbone.marionette'),
        constants = require('utils/constants'),
        channels = require('../channels'),

        // Views
        GlobalView = require('views/GlobalView.js'),
        BaseView = require('views/BaseView.js'),
        HeaderView = require('views/HeaderView.js'),
        IndexView = require('views/IndexView.js');

    module.exports = Backbone.Marionette.Controller.extend({

        initialize: function() {

            // State checks
            app.onload = true;

            // Bootstrap it, gurrl
            this.bootstrap();

        },

        bootstrap: function() {
            this.globalView = new GlobalView();
            this.baseView = new BaseView();
            this.headerView = new HeaderView();
            app.regionHeader.show(this.headerView);
        },

        navigate: function(options) {

            // If navigate() is being called...
            // we must be past our initial page load
            // so we'll set onload to 'false'
            app.onload = false;

            var url = options.url;
            var trigger = options.trigger ? options.trigger : false;

            app.appRouter.navigate(url, {
                trigger: trigger
            });

        },

        /* View Routes
        =========================================== */

        index: function() {
            this.indexView = new IndexView();
            app.regionMain.show(this.indexView);
        },

        home: function() {
            console.log('AppController > home()');
        },

        defaultHandler: function(route) {
            console.log('%cRoute /%s does not exist', 'color:white; background:gray; padding: 0 0.25em', route);
        }

    });
