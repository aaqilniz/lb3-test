/* eslint-disable object-curly-spacing */
/* eslint-disable space-before-function-paren */
'use strict';
const app = require('../../server/server');

module.exports = function (Tyre) {
  Tyre.beforeRemote('create', function (context, user, next) {
    const brandId = context.args.data.brandId;
    const brandModel = app.models.Brand;
    brandModel.findOne({
      where: { id: brandId, type: 'tyre' },
    }, (err, brand) => {
      if (!brand) {
        return next(new Error('No brand found with provided Id for tyre'));
      }
      next();
    });
  });
};
