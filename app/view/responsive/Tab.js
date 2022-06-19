 Ext.define('ResponsiveApp.view.responsive.Tab', {
    extend: 'Ext.tab.Panel',
    xtype: 'responsivetab',

    mainTitle: 'Tab pages',

    margin: 50,

    responsiveConfig: {
        tall: {
            tabBarPosition: 'top'
        },
        wide: {
            tabBarPosition: 'left'
        }
    },

    items: [{
        title: 'Page1',
        iconCls: 'x-fas fa-arrow-circle-down',
        layout: 'fit',
        items: {
            style: 'background-color: lightyellow'
        }
    },{
        title: 'Page2',
        iconCls: 'x-fas fa-arrow-circle-up',
        layout: 'fit',
        items: {
            style: 'background-color: lightgreen'
        }
    },{
        title: 'Page3',
        iconCls: 'x-fas fa-arrow-circle-left',
        layout: 'fit',
        items: {
            style: 'background-color: lightpink'
        }
    },{
        title: 'Page4',
        iconCls: 'x-fas fa-arrow-circle-right',
        layout: 'fit',
        items: {
            style: 'background-color: lightcyan'
        }
    }]

});
