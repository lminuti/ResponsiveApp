Ext.define('ResponsiveApp.view.main.Menu', {
    extend: 'ResponsiveApp.widgets.Menu',
    xtype: 'app-menu',
    controller: 'app-menu',
    viewModel: 'app-menu',

    layout: 'fit',

    padding: 5,

    bodyStyle: 'background-color: #9e9e9e1f;',

    items: [{
        xtype: 'treelist',
        //ui: 'nav',
        //micro: true,
        reference: 'treelist',
        bind: '{navItems}',
        listeners: {
            itemclick: 'onItemClick'
        }
    }, {
        cls: 'info',
        docked: 'bottom',
        html: 'DelphiDay 2022'
    }]

});