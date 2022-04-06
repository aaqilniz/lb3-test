/* eslint-disable space-before-function-paren */
/* eslint-disable object-curly-spacing */
'use strict';

module.exports = function (Brand) {
  Brand.validatesInclusionOf('type', { in: ['car', 'tyre'] });
  Brand.beforeRemote('create', function (context, user, next) {
    context.args.data.code = (new Date % 9e6).toString(36);
    next();
  });
};
