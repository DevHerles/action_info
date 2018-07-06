odoo.define('action_info.ActionInfo', function (require) {
    "use strict";
    /*---------------------------------------------------------
     * Odoo Info view
     *---------------------------------------------------------*/
    
    var core = require('web.core');
    var View = require('web.View');
    var FormWidget = require('web.FormView');

    var _lt = core._lt;
    var QWeb = core.qweb;
    
    var ActionInfo = FormWidget.extend({
        init: function() {
            this._super.apply(this, arguments);
        },
        start: function () {
            this.field_manager.on("record_created", this, function() {
                console.log("record_created");
            })
            return this._super();
        },
        destroy: function () {
            return this._super.apply(this, arguments);
        },
    });
    
    core.form_widget_registry.add('info', ActionInfo);

    return ActionInfo;
});
    