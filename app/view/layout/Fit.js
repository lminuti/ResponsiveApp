Ext.define('ResponsiveApp.view.layout.Fit', {
    extend: 'Ext.Panel',
    xtype: 'fit',

    mainTitle: 'Fit',

    layout: 'fit',

    items: [{
        style: 'margin: 10px; background-color: lightyellow',
        html: 'Questo pannello occupa tutto lo spazio disponibile'
    }]

});
