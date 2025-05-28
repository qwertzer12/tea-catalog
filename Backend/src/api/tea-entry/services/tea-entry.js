'use strict';

/**
 * tea-entry service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tea-entry.tea-entry');
