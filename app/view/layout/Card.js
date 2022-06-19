/**
 * This view is an example list of people.
 */
 Ext.define('ResponsiveApp.view.layout.Card', {
    extend: 'Ext.Panel',
    xtype: 'cardlayout',
    controller: 'cardlayout',

    mainTitle: 'Card',

    layout: 'card',

    items: [{
        html: 'Prima card',
        style: 'margin: 5px; background-color: lightyellow'
    },{
        html: 'Seconda card',
        style: 'margin: 5px; background-color: lightgreen'
    },{
        html: 'Terza card',
        style: 'margin: 5px; background-color: lightblue'
    }, {
        docked: 'bottom', 
        layout: 'hbox',
        items: [{
            xtype: 'spacer',
            flex: 1
        },{
            xtype: 'button',
            text: 'Indietro',
            handler: 'onIndietroClick'
        },{
            xtype: 'button',
            text: 'Avanti',
            handler: 'onAvantiClick'
        }]
    }]

});
