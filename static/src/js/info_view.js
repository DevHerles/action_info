odoo.define('info_view.InfoView', function (require) {
    "use strict";
    /*---------------------------------------------------------
     * Odoo Info view
     *---------------------------------------------------------*/
    
    var core = require('web.core');
    var View = require('web.View');
    
    var _lt = core._lt;
    var QWeb = core.qweb;
    
    var InfoView = View.extend({
        display_name: _lt('Info'),
        icon: 'fa-rocket',
        require_fields: true,
        template: 'InfoView',
        init: function() {
            this._super.apply(this, arguments);
        },
        start: function () {
            this.display_message();
            return this._super();
        },
        render_buttons: function ($node) {
            if ($node) {
                this.$buttons = $(QWeb.render('InfoView.buttons', {}));
                this.$buttons.appendTo($node);
            }
        },
        display_message: function () {
            var $fragment = $(document.createDocumentFragment()),
                $div = $('<div>')
                    .addClass('info_message')
                    .appendTo($fragment);
                $("<p>" + this.dataset.context.message + "</p>").appendTo($div);
            this._clean_table().append($fragment);
        },
        _clean_table: function () {
            return this.$el
                    .find('div')
                        .remove()
                        .end()
                    .find('.oe_view_nocontent')
                        .remove()
                        .end();
        },
        destroy: function () {
            return this._super.apply(this, arguments);
        },
    });
    
    core.view_registry.add('info', InfoView);
    return InfoView;
});
    