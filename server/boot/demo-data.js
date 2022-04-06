'use strict';

const data = {
  brands: [
    {
      name: 'CarBrandA',
      type: 'car',
    },
    {
      name: 'CarBrandB',
      type: 'car',
    },
    {
      name: 'TyreBrandX',
      type: 'tyre',
    },
    {
      name: 'TyreBrandX',
      type: 'tyre',
    },
  ],
  cars: [
    {
      model: 'CarModelA',
      tyreSize: 'XYZ',
      brandId: 1,
    },
    {
      model: 'CarModelB',
      tyreSize: 'XYZ',
      brandId: 2,
    },
    {
      model: 'CarModelC',
      tyreSize: 'XYZ',
      brandId: 1,
    },
    {
      model: 'CarModelD',
      tyreSize: 'XYZ',
      brandId: 2,
    },
  ],
  tyres: [
    {
      model: 'TyreModelA',
      tyreSize: 'XYZ',
      brandId: 3,
    },
    {
      model: 'TyreModelB',
      tyreSize: 'XYZ',
      brandId: 4,
    },
    {
      model: 'TyreModelC',
      tyreSize: 'XYZ',
      brandId: 3,
    },
    {
      model: 'TyreModelD',
      tyreSize: 'XYZ',
      brandId: 4,
    },
  ],
  users: [
    {
      username: 'aaqil',
      email: 'aaqil@gmail.com',
      password: 'aaqil',
    },
    {
      username: 'qasim',
      email: 'qasim@gmail.com',
      password: 'qasim',
    },
    {
      username: 'aadil',
      email: 'aadil@gmail.com',
      password: 'aadil',
    },
  ],
};

module.exports = function createDemoData(server) {
  const userModel = server.models.user;
  const brandModel = server.models.Brand;
  const carModel = server.models.Car;
  const tyreModel = server.models.Tyre;

  const callback = (err) => { if (err) throw err; };

  userModel.create(data.users, callback);
  brandModel.create(data.brands, callback);
  carModel.create(data.cars, callback);
  tyreModel.create(data.tyres, callback);
};
