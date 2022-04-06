/* eslint-disable object-curly-spacing */
/* eslint-disable space-before-function-paren */
'use strict';

const app = require('../../server/server');

module.exports = function (Car) {
  Car.beforeRemote('create', function (context, user, next) {
    const brandId = context.args.data.brandId;
    const brandModel = app.models.Brand;
    brandModel.findOne({
      where: { id: brandId, type: 'car' },
    }, (err, brand) => {
      if (!brand) {
        return next(new Error('No brand found with provided Id for car'));
      }
      next();
    });
  });

  Car.observe('before save', function (context, next) {
    context.instance.code = (new Date % 9e6).toString(36);
    next();
  });

  Car.compatibleTyres = (callback) => {
    callback(null, { done: true });
  };

  Car.remoteMethod('compatibleTyres', {
    http: {
      path: '/compatible-tyres',
      verb: 'get',
    },
    returns: {
      arg: 'done',
      type: Boolean,
    },
  });
};
