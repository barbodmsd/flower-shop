'use strict';

/**
 * auth service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::auth.auth');
