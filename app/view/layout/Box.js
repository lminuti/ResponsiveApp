/**
 * This view is an example list of people.
 */
Ext.define('ResponsiveApp.view.layout.Box', {
    extend: 'Ext.Panel',
    xtype: 'box',

    mainTitle: 'Box',

    layout: 'vbox',

    scrollable: true,

    items: [{
        xtype: 'component',
        cls: 'title',
        html: 'Auto wrap'
    },{
        layout: {
            type: 'hbox',
            wrap: true
        },
        defaults: {
            labelAlign: 'top',
            margin: 5,
        },
        items: [{
            xtype: 'textfield',
            label: 'Campo 1'
        },{
            xtype: 'textfield',
            label: 'Campo 2'
        },{
            xtype: 'textfield',
            label: 'Campo 3'
        },{
            xtype: 'textfield',
            label: 'Campo 4'
        },{
            xtype: 'textfield',
            label: 'Campo 5'
        }]
    },{
        xtype: 'component',
        cls: 'title',
        html: 'Flex'
    },{
        layout: 'hbox',
        defaults: {
            labelAlign: 'top',
            margin: 5,
        },
        items: [{
            xtype: 'textfield',
            label: 'Campo fixed'
        },{
            xtype: 'textfield',
            label: 'Campo flex X 1',
            flex: 1
        },{
            xtype: 'textfield',
            label: 'Campo flex x 2',
            flex: 2
        }]
    },{
        xtype: 'component',
        cls: 'title',
        html: 'Cards'
    },{
        layout: {
            type: 'hbox',
            wrap: true
        },
        defaults: {
            labelAlign: 'top',
            width: 300,
            height: 300,
            margin: 15,
            style: 'box-shadow: 3px 3px 15px 1px rgb(0 0 0 / 73%)'
        },
        items: [{
            xtype: 'panel',
            bodyStyle: 'background-color: antiquewhite',
            width: 630
        },{
            xtype: 'panel',
            bodyStyle: 'background-color: lightgreen'
        },{
            xtype: 'panel',
            bodyStyle: 'background-color: lightblue'
        },{
            xtype: 'panel',
            bodyStyle: 'background-color: antiquewhite'
        },{
            xtype: 'panel',
            bodyStyle: 'background-color: lightgreen'
        }]
    }]


});
