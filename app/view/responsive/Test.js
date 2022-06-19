Ext.define('ResponsiveApp.view.responsive.Test', {
    extend: 'Ext.Panel',
    xtype: 'responsivetest',

    mainTitle: 'Test',

    margin: 50,

    layout: 'vbox',

    items: [{
        xtype: 'component',
        padding: 50,
        cls: 'responsivetest-label',

        responsiveConfig: {
            'width < 200': {
                style: 'background-color: lightyellow',
                html: 'width < 200'
            },
            'width >= 400': {
                style: 'background-color: lightpink',
                html: 'width >= 400'
            },
            'width >= 600': {
                style: 'background-color: lightcyan',
                html: 'width >= 600'
            },
            'width >= 800': {
                style: 'background-color: lightgreen',
                html: 'width >= 800'
            },
            'width >= 1000': {
                style: 'background-color: lightyellow',
                html: 'width >= 1000'
            },
            'width >= 1200': {
                style: 'background-color: lightpink',
                html: 'width >= 1200'
            }
        }
    
    }]

});
