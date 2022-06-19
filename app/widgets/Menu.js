Ext.define('ResponsiveApp.widgets.Menu', {
    extend: 'Ext.Panel',
    xtype: 'responsive-menu',

    config: {
        autoClose: false,
    },

    updateAutoClose(value) {
        if (value) {
            this.hide();
        } else {
            this.show();
        }
    },

});