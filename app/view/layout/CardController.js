Ext.define('ResponsiveApp.view.layout.CardController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.cardlayout',

    onIndietroClick() {
        this.getView().getLayout().previous();
    },

    onAvantiClick() {
        this.getView().getLayout().next();
    }

});
