Ext.define('ResponsiveApp.view.mediaquery.Test', {
    extend: 'Ext.Panel',
    xtype: 'mqtest',

    mainTitle: 'Media query Test',

    margin: 50,

    layout: 'vbox',

    items: [{
        xtype: 'component',
        padding: 50,

        html: '<div class="resp-el">Color: </div>'
    
    }]

});
