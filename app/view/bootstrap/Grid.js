Ext.define('ResponsiveApp.view.bootstrap.Grid', {
    extend: 'Ext.Panel',
    xtype: 'bootstrapgrid',

    mainTitle: 'Form',

    layout: 'vbox',

    margin: 10,

    // https://getbootstrap.com/docs/5.2/layout/grid/

    items: [{
        bodyCls: 'container',
        innerCls: 'row',

        defaults: {
            cls: 'col-lg-4 col-sm-12'
        },

        items: [{
            xtype: 'textfield',
            label: 'Campo 1'
        },{
            xtype: 'textfield',
            label: 'Campo 2 (col-lg-8 col-sm-12)',
            cls: 'col-lg-8 col-sm-12'
        },{
            xtype: 'textfield',
            label: 'Campo 3'
        },{
            xtype: 'textfield',
            label: 'Campo 4'
        },{
            xtype: 'textfield',
            label: 'Campo 5'
        },{
            xtype: 'textfield',
            label: 'Campo 6 (col-lg-8 col-sm-12)',
            cls: 'col-lg-8 col-sm-12'
        },{
            xtype: 'textfield',
            label: 'Campo 7'
        },{
            xtype: 'textfield',
            label: 'Campo 8 (col-lg-8 col-sm-12)',
            cls: 'col-lg-8 col-sm-12'
        },{
            xtype: 'textfield',
            label: 'Campo 9'
        },{
            xtype: 'textfield',
            label: 'Campo 10 (col-lg-12 col-sm-12)',
            cls: 'col-lg-12 col-sm-12'
        }]
    
    }]
});
