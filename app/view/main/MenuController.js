Ext.define('ResponsiveApp.view.main.MenuController', {

    extend: 'Ext.app.ViewController',

    alias: 'controller.app-menu',

    onItemClick(sender, info) {
        const href = info.node.get('href');
        if (href) {
            this.redirectTo(href);

            if (this.getView().getAutoClose()) {
                this.getView().hide();
            }
        }
    },

    init() {
        //this.lookup('treelist').expandAll();
    },
    
});