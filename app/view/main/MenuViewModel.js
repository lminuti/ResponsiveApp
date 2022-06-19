Ext.define('ResponsiveApp.view.main.MenuViewModel', {

    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.app-menu',

    stores: {
        navItems: {
            type: 'tree',
            rootVisible: true,
            root: {
                expanded: true,
                text: 'All',
                iconCls: 'x-fa fa-sitemap',
                children: [{
                    expanded: true,
                    text: 'Database',
                    iconCls: 'x-fa fa-database',
                    children: [{
                        text: 'Personnel',
                        iconCls: 'x-fa fa-users',
                        href: 'mainlist',
                        leaf: true
                    }]
                }, {
                    text: 'Layout',
                    iconCls: 'x-fas fa-vector-square',
                    expanded: true,
                    children: [{
                        text: 'Border',
                        iconCls: 'x-fas fa-border-all',
                        href: 'border',
                        leaf: true
                    }, {
                        text: 'Box',
                        iconCls: 'x-fas fa-grip-lines-vertical',
                        href: 'box',
                        leaf: true
                    }, {
                        text: 'Fit',
                        iconCls: 'x-far fa-square',
                        href: 'fit',
                        leaf: true
                    }, {
                        text: 'Form',
                        iconCls: 'x-fas fa-align-left',
                        href: 'formlayout',
                        leaf: true
                    }, {
                        text: 'Card',
                        iconCls: 'x-far fa-copy',
                        href: 'cardlayout',
                        leaf: true
                    }]
                }, {
                    text: 'Responsive config',
                    iconCls: 'x-fas fa-arrows-alt-h',
                    expanded: true,
                    children: [{
                        text: 'Tab',
                        iconCls: 'x-fas fa-pager',
                        href: 'responsivetab',
                        leaf: true
                    },{
                        text: 'Test',
                        iconCls: 'x-fas fa-question',
                        href: 'responsivetest',
                        leaf: true
                    }]
                }, {
                    text: 'Media query',
                    iconCls: 'x-fas fa-at',
                    expanded: true,
                    children: [{
                        text: 'Test',
                        iconCls: 'x-fas fa-question',
                        href: 'mqtest',
                        leaf: true
                    }]
                }, {
                    text: 'Bootstrap',
                    iconCls: 'x-fab fa-bootstrap',
                    expanded: true,
                    children: [{
                        text: 'Grid',
                        iconCls: 'x-fas fa-grip-horizontal',
                        href: 'bootstrapgrid',
                        leaf: true
                    }]
                }]
            }
        }
    }

});
