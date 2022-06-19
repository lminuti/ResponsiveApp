/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ResponsiveApp.Application',

    name: 'ResponsiveApp',

    requires: [
        // This will automatically load all classes in the ResponsiveApp namespace
        // so that application classes do not need to require each other.
        'ResponsiveApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'ResponsiveApp.view.main.Main'
});
