/**
 * This view is an example list of people.
 */
 Ext.define('ResponsiveApp.view.layout.Border', {
    extend: 'Ext.Panel',
    xtype: 'border',

    mainTitle: 'Border',

    items: [{
        html: 'main'
    },{
        docked: 'left',
        html: 'left',
        style: 'width: 100px; background-color: lightyellow'
    },{
        docked: 'right',
        html: 'right',
        style: 'width: 100px; background-color: lightblue'
    },{
        docked: 'top',
        html: 'top',
        style: 'height: 100px; background-color: lightgreen'
    },{
        docked: 'bottom',
        html: 'bottom',
        style: 'height: 100px; background-color: lightgray'
    }]

});
