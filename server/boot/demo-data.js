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
      tyreSize: 10,
      brandId: 1,
    },
    {
      model: 'CarModelB',
      tyreSize: 20,
      brandId: 2,
    },
    {
      model: 'CarModelC',
      tyreSize: 30,
      brandId: 1,
    },
    {
      model: 'CarModelD',
      tyreSize: 40,
      brandId: 2,
    },
  ],
  tyres: [
    {
      model: 'TyreModelA',
      tyreSize: 10,
      brandId: 3,
    },
    {
      model: 'TyreModelB',
      tyreSize: 10,
      brandId: 4,
    },
    {
      model: 'TyreModelC',
      tyreSize: 20,
      brandId: 3,
    },
    {
      model: 'TyreModelD',
      tyreSize: 30,
      brandId: 4,
    },
    {
      model: 'TyreModelD',
      tyreSize: 100,
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
