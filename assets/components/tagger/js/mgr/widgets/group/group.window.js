Tagger.window.Group = function(config) {
    config = config || {};
    Ext.applyIf(config,{
        title: _('tagger.group.create')
        ,height: 460
        ,width: 600
        ,closeAction: 'close'
        ,fileUpload: true
        ,url: Tagger.config.connectorUrl
        ,action: 'mgr/group/create'
        ,fields: this.getFields(config)
    });
    Tagger.window.Group.superclass.constructor.call(this,config);
};
Ext.extend(Tagger.window.Group,MODx.Window, {
    getFields: function(config) {
        var fields = [{
            xtype: 'textfield'
            ,name: 'id'
            ,anchor: '100%'
            ,hidden: true
        },{
            layout: 'column'
            ,border: false
            ,anchor: '100%'
            ,defaults: {
                layout: 'form'
                ,labelAlign: 'top'
                ,labelSeparator: ''
                ,anchor: '100%'
                ,border: false
            }
            ,items: [{
                columnWidth:.5
                ,border: false
                ,defaults: {
                    msgTarget: 'under'
                    ,anchor: '100%'
                }
                ,items: this.getLeftColumnFields(config)
            },{
                columnWidth: .5
                ,border: false
                ,defaults: {
                    msgTarget: 'under'
                    ,anchor: '100%'
                }
                ,items: this.getRightColumnFields(config)
            }]
        }];

        return fields;
    }

    ,getLeftColumnFields: function(config) {
        return [{
            xtype: 'textfield'
            ,fieldLabel: _('tagger.group.name')
            ,description: _('tagger.group.name_desc')
            ,name: 'name'
            ,anchor: '100%'
            ,allowBlank: false
        },{
            xtype: 'textfield'
            ,fieldLabel: _('tagger.group.alias')
            ,description: _('tagger.group.alias_desc')
            ,name: 'alias'
            ,anchor: '100%'
            ,allowBlank: true
        },{
            xtype: 'tagger-combo-field-type'
            ,fieldLabel: _('tagger.group.field_type')
            ,description: _('tagger.group.field_type_desc')
            ,name: 'field_type'
            ,hiddenName: 'field_type'
            ,anchor: '100%'
            ,allowBlank: false
            ,listeners: {
                select: {fn: function(t, rec) {
                    var els = this.find('name', 'show_autotag');
                    if (els.length == 1) {
                        if (rec.data.v == 'tagger-field-tags') {
                            els[0].show();
                        } else {
                            els[0].hide();
                        }
                    }

                    var ehi = this.find('name', 'hide_input');
                    if (ehi.length == 1) {
                        if (rec.data.v == 'tagger-field-tags') {
                            if (els.length == 1 && els[0].getValue() == 1) {
                                ehi[0].show();
                            }
                        } else {
                            ehi[0].hide();
                        }
                    }
                }, scope: this}
            }
        },{
            xtype: 'tagger-combo-group-place'
            ,fieldLabel: _('tagger.group.place')
            ,description: _('tagger.group.place_desc')
            ,name: 'place'
            ,hiddenName: 'place'
            ,anchor: '100%'
            ,allowBlank: false
        },{
            xtype: 'textfield'
            ,fieldLabel: _('tagger.group.show_for_templates')
            ,description: _('tagger.group.show_for_templates_desc')
            ,name: 'show_for_templates'
            ,anchor: '100%'
            ,hiddenName: 'show_for_templates'
        }];
    }

    ,getRightColumnFields: function(config) {
        return [{
            xtype: 'xcheckbox'
            ,fieldLabel: _('tagger.group.remove_unused')
            ,description: _('tagger.group.remove_unused_desc')
            ,name: 'remove_unused'
            ,anchor: '100%'
        },{
            xtype: 'xcheckbox'
            ,fieldLabel: _('tagger.group.allow_new')
            ,description: _('tagger.group.allow_new_desc')
            ,name: 'allow_new'
            ,anchor: '100%'
        },{
            layout: 'column'
            ,border: false
            ,anchor: '100%'
            ,defaults: {
                layout: 'form'
                ,labelAlign: 'top'
                ,labelSeparator: ''
                ,anchor: '100%'
                ,border: false
            }
            ,items: [{
                columnWidth:.5
                ,border: false
                ,defaults: {
                    msgTarget: 'under'
                    ,anchor: '100%'
                }
                ,items: [{
                    xtype: 'xcheckbox'
                    ,fieldLabel: _('tagger.group.allow_blank')
                    ,description: _('tagger.group.allow_blank_desc')
                    ,name: 'allow_blank'
                    ,anchor: '100%'
                }]
            },{
                columnWidth: .5
                ,border: false
                ,defaults: {
                    msgTarget: 'under'
                    ,anchor: '100%'
                }
                ,items: [{
                    xtype: 'xcheckbox'
                    ,fieldLabel: _('tagger.group.allow_type')
                    ,description: _('tagger.group.allow_type_desc')
                    ,name: 'allow_type'
                    ,anchor: '100%'
                }]
            }]
        },{
            layout: 'column'
            ,border: false
            ,anchor: '100%'
            ,defaults: {
                layout: 'form'
                ,labelAlign: 'top'
                ,labelSeparator: ''
                ,anchor: '100%'
                ,border: false
            }
            ,items: [{
                columnWidth:.5
                ,border: false
                ,defaults: {
                    msgTarget: 'under'
                    ,anchor: '100%'
                }
                ,items: [{
                    xtype: 'xcheckbox'
                    ,fieldLabel: _('tagger.group.show_autotag')
                    ,description: _('tagger.group.show_autotag_desc')
                    ,name: 'show_autotag'
                    ,anchor: '100%'
                    ,hidden: config.record && config.record.field_type != 'tagger-field-tags'
                    ,listeners: {
                        check: function(t, checked) {
                            var els = this.find('name', 'hide_input');
                            if (els.length == 1) {
                                if (checked) {
                                    els[0].show();
                                } else {
                                    els[0].hide();
                                }
                            }
                        }
                        ,scope: this
                    }
                }]
            },{
                columnWidth: .5
                ,border: false
                ,defaults: {
                    msgTarget: 'under'
                    ,anchor: '100%'
                }
                ,items: [{
                    xtype: 'xcheckbox'
                    ,fieldLabel: _('tagger.group.hide_input')
                    ,description: _('tagger.group.hide_input_desc')
                    ,name: 'hide_input'
                    ,anchor: '100%'
                    ,hidden: config.record == undefined || config.record.show_autotag != 1
                }]
            }]
        },{
            xtype: 'numberfield'
            ,fieldLabel: _('tagger.group.tag_limit')
            ,description: _('tagger.group.tag_limit_desc')
            ,name: 'tag_limit'
            ,anchor: '100%'
            ,allowNegative: false
            ,allowDecimals: false
            ,hiddenName: 'tag_limit'
            ,value: (config.record && config.record.tag_limit) ? config.record.tag_limit : 0
        }];
    }
});
Ext.reg('tagger-window-group',Tagger.window.Group);

Tagger.window.GroupImport = function(config) {
    Ext.applyIf(config,{
        title: _('tagger.group.import')
        ,height: 150
        ,width: 475
        ,closeAction: 'close'
        ,fileUpload: true
        ,url: Tagger.config.connectorUrl
        ,grid: null
        ,action: 'mgr/group/import'
        ,fields: this.getFields(config)
    });
    Tagger.window.GroupImport.superclass.constructor.call(this,config);
};
Ext.extend(Tagger.window.GroupImport,MODx.Window, {
    getFields: function(config) {
        var fields = [{
            xtype: 'tagger-combo-tv'
            ,fieldLabel: _('tagger.group.import_from')
            ,name: 'tv'
            ,hiddenName: 'tv'
            ,anchor: '100%'
            ,allowBlank: false
        },{
            xtype: 'tagger-combo-group'
            ,fieldLabel: _('tagger.group.import_to')
            ,baseParams: {
                action: 'mgr/group/getlist'
                ,fieldType: 'tagger-field-tags'
            }
            ,name: 'group'
            ,hiddenName: 'group'
            ,anchor: '100%'
            ,allowBlank: false
        }];

        return fields;
    }

});
Ext.reg('tagger-window-group-import',Tagger.window.GroupImport);

