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

  Tyre.compatibleCars = async (tyreId) => {
    const tyre = await Tyre.findOne({ where: { id: tyreId } });
    if (!tyre) return [];
    const carModel = app.models.Car;
    const cars = await carModel.find({ where: { tyreSize: tyre.tyreSize }, });
    if (!cars.length) return [];
    return cars;
  };

  Tyre.remoteMethod('compatibleCars', {
    http: {
      path: '/compatible-cars',
      verb: 'get',
    },
    accepts: {
      arg: 'tyreId',
      type: 'number',
      required: true,
    },
    returns: {
      arg: 'data',
      type: 'array',
    },
  });
};
