/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */
Ext.define('ResponsiveApp.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    bind: {
        title: 'ResponsiveApp - [{subview:uppercase}]',
    },

    layout: 'card',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit'
    ],

    
    controller: 'main',
    viewModel: 'main',
    
    tools: [{
        iconCls: 'x-fa fa-bars',
        handler: 'onToggleMenu',
        weight: -20
    },{
        iconCls: 'x-fas fa-adjust',
        handler: 'onToggleDarkMode'
    }],

    items: [{
        reference: 'menu',
        docked: 'left',
        xtype: 'app-menu',
        width: 250,
        responsiveConfig: {
            tall: {
                autoClose: true
            },
            wide: {
                autoClose: false
            }
        }
    }],

    listeners: {
        activeitemchange: 'onActiveItemChange'
    }
});
