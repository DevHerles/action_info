openerp.action_info = function (instance,local) {
    var qWeb = instance.web.qweb;
    var _t = instance.web._t;

    instance.action = {};
    instance.action.info = instance.web.form.FormWidget.extend({
        init: function () {
            this._super.apply(this, arguments);
        },
        start: function () {
            var self = this;
            this.field_manager.on("load_record", this, function() { 
                console.log('load_record') 
            });
            this.field_manager.on("record_created", this, function() { 
                console.log('record_created') 
            });
            $.when.apply($, this.promises).then(function () {
                self.render();
            });
        },
        render: function () {
            console.log('Render!!!!');
        }
    });
    instance.web.form.custom_widgets.add('action_info', 'instance.action.info');
};