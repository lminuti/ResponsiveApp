Ext.define('ResponsiveApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    routes : {
        ':xtype' : 'showView'
    },

    darkMode: false,

    showView(xtype) {
        this.getView().removeAll();
        this.getView().setActiveItem({
            xtype: xtype
        });
    },

    onActiveItemChange(sender, value) {
        this.getViewModel().set('subview', value.mainTitle);
    },

    onToggleMenu() {
        const menu = this.lookup('menu');
        menu.setHidden(!menu.getHidden());
    },

    onToggleDarkMode() {
        this.darkMode = !this.darkMode;
        Ext.theme.Material.setDarkMode(this.darkMode);
    },

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    }
});
