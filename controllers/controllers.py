# -*- coding: utf-8 -*-
from odoo import http

# class InfoView(http.Controller):
#     @http.route('/info_view/info_view/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/info_view/info_view/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('info_view.listing', {
#             'root': '/info_view/info_view',
#             'objects': http.request.env['info_view.info_view'].search([]),
#         })

#     @http.route('/info_view/info_view/objects/<model("info_view.info_view"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('info_view.object', {
#             'object': obj
#         })