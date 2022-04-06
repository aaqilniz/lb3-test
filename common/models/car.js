/* eslint-disable padded-blocks */
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
      return next();
    });
  });

  Car.observe('before save', function (context, next) {
    context.instance.code = (new Date % 9e6).toString(36);
    return next();
  });

  Car.compatibleTyres = async (carId) => {
    const car = await Car.findOne({ where: { id: carId } });
    if (!car) return [];
    const tyreModel = app.models.Tyre;
    const tyres = await tyreModel.find({ where: { tyreSize: car.tyreSize }, });
    if (!tyres.length) return [];
    return tyres;
  };

  Car.remoteMethod('compatibleTyres', {
    http: {
      path: '/compatible-tyres',
      verb: 'get',
    },
    accepts: {
      arg: 'carId',
      type: 'number',
      required: true,
    },
    returns: {
      arg: 'data',
      type: 'array',
    },
  });
};
