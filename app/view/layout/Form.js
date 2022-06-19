Ext.define('ResponsiveApp.view.layout.Form', {
    extend: 'Ext.Panel',
    xtype: 'formlayout',

    mainTitle: 'Form',

    layout: 'vbox',

    scrollable: true,

    items: [{
        xtype: 'component',
        cls: 'title',
        html: 'layout: vbox'
    },{
        layout: 'vbox',
        defaults: {
            labelAlign: 'left',
            margin: 5,
        },
        items: [{
            xtype: 'textfield',
            label: 'Campo 1'
        },{
            xtype: 'textfield',
            label: 'Descrizione molto lunga'
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
        html: 'layout: form'
    },{
        layout: 'form',
        defaults: {
            labelAlign: 'left',
            margin: 5,
        },
        items: [{
            xtype: 'textfield',
            label: 'Campo 1'
        },{
            xtype: 'textfield',
            label: 'Descrizione molto lunga'
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
    }]
});
