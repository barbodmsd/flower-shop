'use strict';

/**
 * good service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::good.good');
