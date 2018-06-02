# -*- coding: utf-8 -*-

from odoo import models, fields, api

class info_view(models.Model):
    _name = 'info_view.info_view'

    name = fields.Char()
    value = fields.Integer()
    value2 = fields.Float(compute="_value_pc", store=True)
    description = fields.Text()

    @api.depends('value')
    def _value_pc(self):
        self.value2 = float(self.value) / 100

    def create_period(self):
        return {
            'name': 'Info form',
            'type': 'ir.actions.act_window',
            'res_model': 'info_view.wizard',
            'view_mode': 'info',
            'view_type': 'info',
            'target': 'new'
            }


class view(models.Model):
    _name = 'ir.ui.view'
    _inherit = 'ir.ui.view'

    type = fields.Selection(selection_add=[('info', 'Info')])
    # in your case you should replate ('assignment', 'Assignment') with ('styled', 'Styled or another name...')


class wizard(models.Model):
    _name = 'info_view.wizard'

    message = fields.Char()

    def create_period(self):
        print('Hey hey 1')